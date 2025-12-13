#!/bin/bash

# Story Protocol CLI - Installation Script
# Run this on a fresh machine to set up the CLI

set -e  # Exit on error

echo "════════════════════════════════════════════════════════════"
echo "  Story Protocol CLI - Installation Script"
echo "════════════════════════════════════════════════════════════"
echo ""

# Check Node.js version
echo "Checking Node.js version..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    echo "   Visit: https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version must be 16 or higher. Current: $(node --version)"
    exit 1
fi

echo "✅ Node.js $(node --version) detected"
echo ""

# Navigate to CLI directory
echo "Installing CLI dependencies..."
cd "$(dirname "$0")"

# Install dependencies
npm install

# Build the CLI
echo ""
echo "Building CLI..."
npm run build

# Link globally
echo ""
echo "Linking CLI globally (requires sudo)..."
sudo npm link

# Verify installation
echo ""
echo "Verifying installation..."
if command -v story-dev-cli &> /dev/null; then
    echo "✅ CLI installed successfully!"
    echo ""
    story-dev-cli --version
    echo ""
    echo "════════════════════════════════════════════════════════════"
    echo "  Installation Complete!"
    echo "════════════════════════════════════════════════════════════"
    echo ""
    echo "Next steps:"
    echo "  1. Run: story-dev-cli create:quickstart --interactive"
    echo "  2. Follow the prompts to create your project"
    echo "  3. Navigate to your project and run: npm install && npm run dev"
    echo ""
    echo "Documentation: https://docs.story.foundation"
    echo "Discord: https://discord.gg/storybuilders"
    echo ""
else
    echo "❌ Installation failed. Please check the errors above."
    exit 1
fi
