/**
 * Security utilities for handling private keys and sensitive data
 */

/**
 * Validate Ethereum private key format
 */
export function validatePrivateKey(key: string): boolean {
  // Remove 0x prefix if present
  const cleanKey = key.startsWith('0x') ? key.slice(2) : key;
  
  // Check if it's 64 hex characters
  return /^[0-9a-fA-F]{64}$/.test(cleanKey);
}

/**
 * Format private key with 0x prefix
 */
export function formatPrivateKey(key: string): string {
  const cleanKey = key.startsWith('0x') ? key.slice(2) : key;
  return `0x${cleanKey}`;
}

/**
 * Mask private key for display (show first 6 and last 4 characters)
 */
export function maskPrivateKey(key: string): string {
  if (key.length < 10) return '***';
  return `${key.slice(0, 6)}...${key.slice(-4)}`;
}

/**
 * Security warnings for private key handling
 */
export const SECURITY_WARNINGS = {
  privateKey: `
⚠️  CRITICAL SECURITY WARNING ⚠️

Your private key controls your wallet and all its assets.

NEVER:
  • Share your private key with anyone
  • Commit your .env file to version control
  • Store your key in plain text on shared systems
  • Use your production wallet for testing

ALWAYS:
  • Keep your .env file local and secure
  • Use a separate wallet for development/testing
  • Verify .env is in your .gitignore
  • Back up your private key securely

The CLI has automatically added .env to .gitignore for your protection.
`,
  
  testnetRecommendation: `
💡 RECOMMENDATION: Use Testnet First

For development and testing:
  1. Use Story Aeneid Testnet (Chain ID: 1315)
  2. Get free testnet tokens from the faucet
  3. Test your application thoroughly
  4. Only deploy to mainnet when ready

Testnet Faucet: https://faucet.story.foundation
`,
};

/**
 * Generate .gitignore content
 */
export function generateGitignore(): string {
  return `# Environment variables (NEVER commit these!)
.env
.env.local
.env.*.local

# Dependencies
node_modules/
.pnp
.pnp.js

# Build output
dist/
build/
.next/
out/

# Testing
coverage/

# Misc
.DS_Store
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
`;
}

/**
 * Generate .env.example content
 */
export function generateEnvExample(network: 'mainnet' | 'testnet'): string {
  return `# Story Protocol Configuration
# Copy this file to .env and fill in your values

# Network Configuration
NEXT_PUBLIC_NETWORK=${network}
NEXT_PUBLIC_CHAIN_ID=${network === 'mainnet' ? '1514' : '1315'}
NEXT_PUBLIC_RPC_URL=<auto-populated>

# Private Key (KEEP THIS SECRET!)
# Get a testnet wallet from https://faucet.story.foundation
PRIVATE_KEY=your_private_key_here

# Story Protocol Contract Addresses (auto-populated)
NEXT_PUBLIC_IP_ASSET_REGISTRY=<auto-populated>
NEXT_PUBLIC_LICENSING_MODULE=<auto-populated>
NEXT_PUBLIC_ROYALTY_MODULE=<auto-populated>
NEXT_PUBLIC_REGISTRATION_WORKFLOWS=<auto-populated>
`;
}
