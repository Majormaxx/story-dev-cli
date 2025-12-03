# Story Protocol CLI

> Generate production-ready Story Protocol projects in 2 minutes

[![npm version](https://img.shields.io/npm/v/@story-protocol/cli.svg)](https://www.npmjs.com/package/@story-protocol/cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

The Story Protocol CLI is a developer tool that reduces setup time from **60 minutes to 2 minutes** by automating environment configuration and generating production-ready boilerplate code for Story Protocol applications.

## Features

- ✅ **Instant Setup** - Generate fully configured Next.js projects
- ✅ **Auto-Configuration** - Contract addresses and network settings pre-populated
- ✅ **Multiple Templates** - IP Registration, Licensing, Royalty Management
- ✅ **Security First** - Built-in security warnings and `.gitignore` configuration
- ✅ **TypeScript Support** - Full type safety with Story SDK
- ✅ **Interactive CLI** - User-friendly prompts for easy project creation

## Installation

```bash
npm install -g @story-protocol/cli
```

## Quick Start

### Create a New Project

```bash
story-cli create:quickstart --interactive
```

Follow the interactive prompts:

1. **Project name** - Choose a name for your project
2. **Template** - Select from IP Registration, Licensing, or Royalty Management
3. **Network** - Choose Testnet (recommended) or Mainnet
4. **Private key** - Enter your wallet private key (stored securely in `.env`)

### Run Your Project

```bash
cd my-story-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 

## Templates

### 1. IP Registration

Register intellectual property assets on Story Protocol.

**Features:**

- Mint and register IP assets
- Upload metadata
- Transaction tracking
- Block explorer integration

### 2. Licensing (Coming Soon)

Attach licenses and mint license tokens.

**Features:**

- Attach PIL licenses to IP
- Mint license tokens
- Configure license terms

### 3. Royalty Management (Coming Soon)

Claim and manage royalty payments.

**Features:**

- Claim royalties
- Track revenue
- Payment history

## Commands

### `create:quickstart`

Generate a new Story Protocol project.

**Options:**

- `--interactive` - Interactive mode (default)
- `--name <string>` - Project name
- `--template <string>` - Template (registration, licensing, royalty)
- `--network <string>` - Network (testnet, mainnet)
- `--force` - Overwrite existing directory

**Examples:**

```bash
# Interactive mode
story-cli create:quickstart --interactive

# Non-interactive mode
story-cli create:quickstart --name my-app --template registration --network testnet

# Force overwrite
story-cli create:quickstart --name my-app --force
```

## Project Structure

Generated projects include:

```
my-story-app/
├── src/
│   ├── client/
│   │   └── story.ts          # Story SDK client
│   ├── components/
│   │   └── RegisterIP.tsx    # Template component
│   ├── lib/
│   │   ├── constants.ts      # Contract addresses
│   │   ├── types.ts          # TypeScript types
│   │   └── utils.ts          # Helper functions
│   ├── pages/
│   │   └── index.tsx         # Main page
│   └── styles/
│       └── globals.css       # Global styles
├── .env                      # Environment variables (auto-populated)
├── .env.example              # Example env file
├── .gitignore                # Git ignore (includes .env)
├── package.json
├── tsconfig.json
└── README.md
```

## Environment Variables

All environment variables are auto-populated:

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
# ... and more
```

## Security

### Private Key Safety

⚠️ **CRITICAL:** Your private key controls your wallet and all its assets.

**DO:**

- ✅ Use a separate wallet for development/testing
- ✅ Keep your `.env` file local and secure
- ✅ Verify `.env` is in `.gitignore`
- ✅ Use testnet for development

**DON'T:**

- ❌ Share your private key with anyone
- ❌ Commit `.env` to version control
- ❌ Use your production wallet for testing
- ❌ Store keys in plain text on shared systems

The CLI automatically:

- Adds `.env` to `.gitignore`
- Creates `.env.example` for version control
- Shows security warnings during setup

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

### "Invalid private key" error

Ensure your private key is in the correct format:

- 64 hex characters
- Can start with `0x` or not
- Example: `0x1234567890abcdef...`

### "Insufficient funds" error

**Testnet:** Get free tokens from https://faucet.story.foundation

**Mainnet:** Ensure your wallet has IP tokens

### Transaction fails

1. Check you're on the correct network
2. Verify your private key has sufficient funds
3. Check the block explorer for error details

## Resources

- **Documentation:** https://docs.story.foundation
- **Discord:** https://discord.gg/storybuilders
- **GitHub:** https://github.com/storyprotocol
- **Explorer:** https://www.storyscan.io

## Development

### Build from Source

```bash
git clone https://github.com/storyprotocol/story-dev-cli
cd story-dev-cli
npm install
npm run build
npm link
```

### Run Tests

```bash
npm test
```

## License

MIT ©


