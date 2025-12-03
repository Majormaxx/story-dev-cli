# Story Protocol IP Registration

A Next.js application for registering intellectual property on Story Protocol.

Generated with `@story-protocol/cli`

## Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure your private key:**

   Edit `.env` and set your private key:

   ```
   PRIVATE_KEY=0xyour_private_key_here
   ```

   ⚠️ **SECURITY WARNING:** Never commit your `.env` file! It's already in `.gitignore`.

3. **Run development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:3000
   ```

## Features

- ✅ Register IP assets on Story Protocol
- ✅ Auto-configured with Story SDK
- ✅ Pre-populated contract addresses
- ✅ Responsive UI with Tailwind CSS
- ✅ TypeScript support

## Network Configuration

This project is configured for **${process.env.NEXT_PUBLIC_NETWORK === 'mainnet' ? 'Story Mainnet' : 'Story Aeneid Testnet'}**.

- **Chain ID:** ${process.env.NEXT_PUBLIC_CHAIN_ID}
- **RPC URL:** ${process.env.NEXT_PUBLIC_RPC_URL}
- **Block Explorer:** ${process.env.NEXT_PUBLIC_BLOCK_EXPLORER}

### Get Testnet Tokens

If using testnet, get free tokens from the faucet:
https://faucet.story.foundation

## Project Structure

```
.
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
│   │   ├── _app.tsx          # App wrapper
│   │   └── index.tsx         # Main page
│   └── styles/
│       └── globals.css       # Global styles
├── .env                      # Environment variables (DO NOT COMMIT!)
├── .env.example              # Example env file
└── package.json
```

## How It Works

### 1. Story SDK Client

The Story SDK client is initialized in `src/client/story.ts` with your private key and network configuration.

### 2. IP Registration

The `RegisterIP` component (`src/components/RegisterIP.tsx`) handles:

- Form input for IP metadata
- Transaction submission via Story SDK
- Success/error handling
- Transaction tracking

### 3. Contract Addresses

All Story Protocol contract addresses are auto-populated in `.env` from the CLI.

## Customization

### Change Network

To switch between testnet and mainnet, regenerate the project with:

```bash
story-cli create:quickstart --interactive
```

### Add More Features

Check out the Story Protocol documentation for more features:

- Attach licenses to IP
- Mint license tokens
- Claim royalties
- Create derivative works

## Resources

- **Documentation:** https://docs.story.foundation
- **Discord:** https://discord.gg/storybuilders
- **Explorer:** ${process.env.NEXT_PUBLIC_BLOCK_EXPLORER}
- **GitHub:** https://github.com/storyprotocol

## Troubleshooting

### "Invalid private key" error

Make sure your private key is in the correct format:

- Should be 64 hex characters
- Can start with `0x` or not
- Example: `0x1234567890abcdef...`

### "Insufficient funds" error

If on testnet, get tokens from the faucet: https://faucet.story.foundation

If on mainnet, ensure your wallet has IP tokens.

### Transaction fails

- Check that you're connected to the correct network
- Verify your private key has sufficient funds
- Check the block explorer for error details

## Next Steps

1. **Customize the UI** - Edit `src/components/RegisterIP.tsx`
2. **Add licensing** - Use Story SDK's licensing module
3. **Add royalties** - Implement royalty claiming
4. **Deploy** - Deploy to Vercel with `vercel deploy`

## License

MIT

---

Built with ❤️ using Story Protocol
