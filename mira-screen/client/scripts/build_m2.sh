#!/bin/bash

# ================================================
# Mira Screen - Build Script for Mac Mini M2
# Run this locally on your Mac Mini M2
# ================================================

set -e

echo "🍎 Building Mira Screen on Mac Mini M2..."

cd "$(dirname "$0")/.."

echo "1. Cleaning project..."
flutter clean

echo "2. Regenerating iOS project..."
rm -rf ios
flutter create --platforms=ios,android . \
  --project-name mira_screen \
  --org com.mirascreen

echo "3. Getting dependencies..."
flutter pub get

echo "4. Building Android..."
flutter build apk --release

echo "5. Building iOS for Apple Silicon (M2)..."
flutter build ipa --release --no-codesign

echo "✅ Build completed successfully!"
echo "APK: build/app/outputs/flutter-apk/app-release.apk"
echo "IPA: build/ios/ipa/"