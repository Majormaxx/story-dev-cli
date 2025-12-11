# Story Dev CLI

> From idea to Story Protocol app in 2 minutes

[![npm version](https://img.shields.io/npm/v/@majormaxx/story-dev-cli.svg)](https://www.npmjs.com/package/@majormaxx/story-dev-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dt/@majormaxx/story-dev-cli.svg)](https://www.npmjs.com/package/@majormaxx/story-dev-cli)

## Why Story Dev CLI?

Building on Story Protocol shouldn't require an hour of setup. Story Dev CLI eliminates the tedious configuration work so you can start building immediately.

**Before:** 60+ minutes configuring contracts, environment variables, and boilerplate  
**After:** 2 minutes to a working Story Protocol application

## Installation

```bash
npm install -g @majormaxx/story-dev-cli
```

Or try instantly with npx (no installation required):

```bash
npx @majormaxx/story-dev-cli create:quickstart --interactive
```

## Quick Start

Create a new Story Protocol project in three steps:

```bash
# 1. Generate your project
story-dev-cli create:quickstart --interactive

# 2. Install dependencies
cd my-story-app
npm install

# 3. Start developing
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Features

- **Zero Configuration** - All 16+ contract addresses auto-populated for mainnet and testnet
- **Production-Ready Templates** - Working Next.js applications with Story SDK integration
- **Built-in Security** - Automatic `.gitignore` creation and private key validation
- **TypeScript First** - Full type safety with Story Protocol SDK
- **Interactive CLI** - Simple prompts guide you through project creation

## Available Template

### IP Registration

Register intellectual property assets on Story Protocol with a complete Next.js application.

**Includes:**

- Story SDK client setup
- IP asset registration flow
- Transaction handling and confirmation
- Metadata upload interface
- Tailwind CSS styling

## CLI Reference

### `create:quickstart`

Generate a new Story Protocol project.

| Option                | Description                    | Default        |
| --------------------- | ------------------------------ | -------------- |
| `--interactive`       | Interactive prompts            | `true`         |
| `--name <string>`     | Project name                   | `my-story-app` |
| `--template <string>` | Template type (`registration`) | `registration` |
| `--network <string>`  | Network (`testnet`, `mainnet`) | `testnet`      |
| `--force`             | Overwrite existing directory   | `false`        |

**Examples:**

```bash
# Interactive mode (recommended)
story-dev-cli create:quickstart --interactive

# Quick setup with defaults
story-dev-cli create:quickstart --name my-ip-app

# Full configuration
story-dev-cli create:quickstart \
  --name my-app \
  --template registration \
  --network testnet

# Overwrite existing directory
story-dev-cli create:quickstart --name my-app --force
```

## Generated Project Structure

```
my-story-app/
├── src/
│   ├── client/
│   │   └── story.ts          # Story SDK client
│   ├── components/
│   │   └── RegisterIP.tsx    # IP registration component
│   ├── lib/
│   │   ├── constants.ts      # Contract addresses
│   │   ├── types.ts          # TypeScript types
│   │   └── utils.ts          # Helper functions
│   ├── pages/
│   │   └── index.tsx         # Main application page
│   └── styles/
│       └── globals.css       # Tailwind CSS styles
├── .env                      # Environment variables (auto-populated)
├── .env.example              # Example environment file
├── .gitignore                # Git ignore (includes .env)
├── package.json
├── tsconfig.json
└── README.md
```

## Environment Configuration

All environment variables are automatically configured:

```env
# Network Configuration
NEXT_PUBLIC_NETWORK=testnet
NEXT_PUBLIC_CHAIN_ID=1315
NEXT_PUBLIC_RPC_URL=https://testnet.storyscan.io/api/eth-rpc

# Private Key (KEEP SECRET!)
PRIVATE_KEY=0x...

# Story Protocol Contracts (auto-populated)
NEXT_PUBLIC_IP_ASSET_REGISTRY=0x...
NEXT_PUBLIC_LICENSING_MODULE=0x...
NEXT_PUBLIC_ROYALTY_MODULE=0x...
# ... and 13 more contracts
```

## Security Best Practices

**CRITICAL:** Your private key controls your wallet and all its assets.

**Recommended:**

- Use a separate wallet for development and testing
- Keep your `.env` file local and never commit it
- Verify `.env` is in your `.gitignore` (automatically added by CLI)
- Use testnet for development before deploying to mainnet

**The CLI automatically:**

- Adds `.env` to `.gitignore`
- Validates private key format
- Creates `.env.example` for version control
- Displays security warnings during setup

For detailed security guidelines, see [SECURITY.md](https://github.com/Majormaxx/story-dev-cli/blob/main/SECURITY.md).

## Networks

### Testnet (Recommended for Development)

- **Name:** Story Aeneid Testnet
- **Chain ID:** 1315
- **RPC URL:** https://testnet.storyscan.io/api/eth-rpc
- **Explorer:** https://testnet.storyscan.io
- **Faucet:** https://faucet.story.foundation

### Mainnet (Production Only)

- **Name:** Story Mainnet
- **Chain ID:** 1514
- **RPC URL:** https://rpc.story.foundation
- **Explorer:** https://www.storyscan.io

## Troubleshooting

### Invalid private key error

Ensure your private key:

- Is 64 hexadecimal characters
- Optionally starts with `0x`
- Example: `0x1234567890abcdef...` (64 characters after 0x)

### Insufficient funds error

**Testnet:** Get free tokens at https://faucet.story.foundation  
**Mainnet:** Ensure your wallet has IP tokens

### Transaction fails

1. Verify you're connected to the correct network
2. Confirm your wallet has sufficient funds
3. Check the block explorer for detailed error messages

## Resources

- **Story Protocol Documentation:** https://docs.story.foundation
- **Story Protocol Discord:** https://discord.gg/storybuilders
- **Block Explorer:** https://www.storyscan.io
- **GitHub Repository:** https://github.com/Majormaxx/story-dev-cli

## Contributing

Contributions are welcome! Please see our [Contributing Guide](https://github.com/Majormaxx/story-dev-cli/blob/main/CONTRIBUTING.md).

### Development Setup

```bash
# Clone the repository
git clone https://github.com/Majormaxx/story-dev-cli.git
cd story-dev-cli

# Install dependencies
npm install

# Build the project
npm run build

# Link for local testing
npm link

# Run tests
npm test
```

## Support

- **Issues:** https://github.com/Majormaxx/story-dev-cli/issues
- **Discord:** https://discord.gg/storybuilders

## License

MIT © 2024 Majormaxx

---

**Built for the Story Protocol ecosystem** | [Story Protocol](https://www.story.foundation)
