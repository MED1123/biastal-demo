import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;
        const company = formData.get('company') as string;
        const phone = formData.get('phone') as string;
        const source = formData.get('source') as string;
        const city = formData.get('city') as string;

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: 'Brak wymaganych pól (imię, email, treść)' },
                { status: 422 }
            );
        }

        // Sprawdzamy, czy skonfigurowano zmienne środowiskowe dla SMTP
        const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO } = process.env;

        if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_TO) {
            console.error('[api/contact] Brak pełnej konfiguracji serwera SMTP w .env.local');
            return NextResponse.json(
                { success: false, error: 'Błąd konfiguracji serwera pocztowego na serwerze' },
                { status: 500 }
            );
        }

        // Przetwarzamy załączniki z FormData na format akceptowany przez Nodemailer
        const attachments = [];
        const files = formData.getAll('files[]');

        for (const file of files) {
            if (file instanceof File) {
                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                attachments.push({
                    filename: file.name,
                    content: buffer,
                    contentType: file.type
                });
            }
        }

        // Budujemy treść HTML wiadomości
        const htmlMessage = `
            <h2>Nowe zapytanie z formularza kontaktowego</h2>
            <p><strong>Źródło:</strong> ${source || 'Brak danych'}</p>
            <hr />
            <p><strong>Imię i nazwisko:</strong> ${name}</p>
            <p><strong>Firma:</strong> ${company || 'Brak podanej firmy'}</p>
            <p><strong>E-mail zadającego:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Telefon kontaktowy:</strong> ${phone || 'Brak telefonu'}</p>
            <p><strong>Miejscowość:</strong> <span style="color: #ff5a00; font-weight: bold;">${city || 'Brak podanej miejscowości'}</span></p>
            <hr />
            <h3>Treść wiadomości:</h3>
            <p style="white-space: pre-wrap; background-color: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
            ${attachments.length > 0 ? `<p><em>Wiadomość zawiera ${attachments.length} załączników (dodane do e-maila).</em></p>` : ''}
        `;

        // Tworzymy transporter Nodemailer podłączając się pod SMTP (np. LH.pl)
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT) || 465,
            secure: Number(SMTP_PORT) === 465, // True dla 465 (SSL), false dla 587 (TLS)
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        let subjectText = 'Nowe Zapytanie';
        if (source === 'kontakt') {
            subjectText = 'Nowe Zapytanie - Kontakt';
        } else if (source === 'zapytanie-ofertowe' || source === 'kalkulator-wag') {
            subjectText = 'Nowe Zapytanie Ofertowe';
        }

        // Wysłanie maila
        const info = await transporter.sendMail({
            from: `"${name} (Przez Stronę)" <${SMTP_FROM || SMTP_USER}>`, // Często hostingi wymagają by "From" było równe użytkownikowi SMTP
            replyTo: email, // Adres klienta z formularza do poprawnego działania przycisku "Odpowiedz"
            to: SMTP_TO,
            subject: `${subjectText} - ${name}`,
            html: htmlMessage,
            attachments: attachments
        });

        console.log('[api/contact] E-mail wysłany pomyślnie. Message ID:', info.messageId);

        return NextResponse.json({ success: true, message: 'Wiadomość wysłana pomyślnie!' }, { status: 200 });

    } catch (err: any) {
        console.error('[api/contact] Błąd serwera przy wysyłce (Nodemailer):', err.message || err);
        return NextResponse.json(
            { success: false, error: 'Wystąpił błąd przy wysyłce na serwerze. Spróbuj powtórnie.' },
            { status: 500 }
        );
    }
}
