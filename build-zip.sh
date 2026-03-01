#!/bin/bash
echo "Budowanie aplikacji Next.js do produkcji..."
npm run build

echo "Czyszczenie lub tworzenie folderu roboczego..."
rm -rf deploy-bundle
mkdir deploy-bundle

echo "Kopiowanie wymaganych plików..."
cp -R .next deploy-bundle/
cp -R public deploy-bundle/
cp package.json deploy-bundle/
cp package-lock.json deploy-bundle/
cp server.js deploy-bundle/
cp next.config.ts deploy-bundle/

echo "Kopiowanie pliku ze zmiennymi srodowiskowymi (SMTP)..."
if [ -f .env.local ]; then
  cp .env.local deploy-bundle/.env
  echo "=> Znalazlem .env.local, skopiowalem jako .env"
elif [ -f .env.production ]; then
  cp .env.production deploy-bundle/.env
  echo "=> Znalazlem .env.production, skopiowalem jako .env"
else
  echo "=> UWAGA: Nie znaleziono .env.local ani .env.production!"
  echo "=> Na serwerze bedziesz musial(a) utworzyc plik .env z danymi do SMTP!"
fi

echo "Pakowanie do pliku ZIP..."
cd deploy-bundle
zip -r ../biastal-deploy.zip .
cd ..

echo "Sprzatanie..."
rm -rf deploy-bundle

echo "==== GOTOWE! ===="
echo "Plik 'biastal-deploy.zip' zostal utworzony."
