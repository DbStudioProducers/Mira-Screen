#!/bin/bash

echo "🚀 Gerando plataformas iOS e Android para Mira Screen..."

cd "$(dirname "$0")/.."

# Gera as pastas ios/ e android/
flutter create --platforms=ios,android .

echo "✅ Plataformas geradas com sucesso!"
echo "Agora você pode compilar no Codemagic."