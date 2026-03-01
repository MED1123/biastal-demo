#!/bin/bash
echo "Budowanie aplikacji Next.js w trybie standalone..."
npm run build

echo "Kopiowanie assets (static i public) do folderu standalone..."
# Next.js standalone nie kopiuje automatycznie static i public
cp -R .next/static .next/standalone/.next/static
cp -R public .next/standalone/public

echo "Kopiowanie pliku ze zmiennymi srodowiskowymi (SMTP)..."
if [ -f .env.local ]; then
  cp .env.local .next/standalone/.env
  echo "=> Znalazlem .env.local, skopiowalem jako .env"
elif [ -f .env.production ]; then
  cp .env.production .next/standalone/.env
  echo "=> Znalazlem .env.production, skopiowalem jako .env"
else
  echo "=> UWAGA: Nie znaleziono pliku env z SMTP!"
fi

echo "Pakowanie do pliku ZIP..."
cd .next/standalone
zip -r ../../biastal-standalone.zip .
cd ../../

echo "==== GOTOWE! ===="
echo "Plik 'biastal-standalone.zip' zostal utworzony."
echo "Wgraj i rozpakuj wszystkie pliki z tego archiwum do folderu aplikacji na DirectAdmin."
echo "Startup file w DirectAdmin powinien byc ustawiony na glowny plik projektu: 'server.js'"
