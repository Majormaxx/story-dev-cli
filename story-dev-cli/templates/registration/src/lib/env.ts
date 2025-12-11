/**
 * Environment validation utilities
 * Ensures all required environment variables are present and secure
 */

interface EnvConfig {
  // Network Configuration
  NEXT_PUBLIC_NETWORK: string;
  NEXT_PUBLIC_CHAIN_ID: string;
  NEXT_PUBLIC_RPC_URL: string;
  PRIVATE_KEY: string;
  
  // Contract Addresses
  NEXT_PUBLIC_IP_ASSET_REGISTRY: string;
  NEXT_PUBLIC_LICENSING_MODULE: string;
  NEXT_PUBLIC_ROYALTY_MODULE: string;
  NEXT_PUBLIC_REGISTRATION_WORKFLOWS: string;
}

const REQUIRED_ENV_VARS: (keyof EnvConfig)[] = [
  'NEXT_PUBLIC_NETWORK',
  'NEXT_PUBLIC_CHAIN_ID',
  'NEXT_PUBLIC_RPC_URL',
  'PRIVATE_KEY',
  'NEXT_PUBLIC_IP_ASSET_REGISTRY',
  'NEXT_PUBLIC_LICENSING_MODULE',
  'NEXT_PUBLIC_ROYALTY_MODULE',
  'NEXT_PUBLIC_REGISTRATION_WORKFLOWS',
];

/**
 * Validate that all required environment variables are set
 * Throws error if any are missing
 */
export function validateEnvironment(): void {
  const missing: string[] = [];
  
  for (const envVar of REQUIRED_ENV_VARS) {
    const value = process.env[envVar];
    if (!value || value.trim() === '' || value === 'your_private_key_here') {
      missing.push(envVar);
    }
  }
  
  if (missing.length > 0) {
    const errorMessage = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 ENVIRONMENT CONFIGURATION ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Missing or invalid environment variables:
${missing.map(v => `  • ${v}`).join('\n')}

REQUIRED ACTIONS:
1. Ensure .env file exists in your project root
2. Copy .env.example to .env if needed
3. Fill in all required values in .env
4. Never commit .env to version control

SECURITY WARNING:
Your PRIVATE_KEY controls your wallet and assets.
Never share it or commit it to git!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    throw new Error(errorMessage);
  }
}

/**
 * Validate private key format
 */
export function validatePrivateKey(key: string): boolean {
  const cleanKey = key.startsWith('0x') ? key.slice(2) : key;
  return /^[0-9a-fA-F]{64}$/.test(cleanKey);
}

/**
 * Check environment configuration and log warnings
 */
export function checkEnvironment(): void {
  try {
    validateEnvironment();
    
    // Additional security checks
    const privateKey = process.env.PRIVATE_KEY!;
    if (!validatePrivateKey(privateKey)) {
      console.warn('⚠️  WARNING: PRIVATE_KEY format appears invalid');
    }
    
    const network = process.env.NEXT_PUBLIC_NETWORK;
    if (network === 'mainnet') {
      console.warn('⚠️  WARNING: Running on MAINNET - ensure you understand the risks');
    } else {
      console.log('✓ Development mode: Using testnet');
    }
    
    console.log('✓ Environment validation passed');
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'Environment validation failed');
    process.exit(1);
  }
}

/**
 * Get typed environment configuration
 */
export function getEnvConfig(): EnvConfig {
  validateEnvironment();
  
  return {
    NEXT_PUBLIC_NETWORK: process.env.NEXT_PUBLIC_NETWORK!,
    NEXT_PUBLIC_CHAIN_ID: process.env.NEXT_PUBLIC_CHAIN_ID!,
    NEXT_PUBLIC_RPC_URL: process.env.NEXT_PUBLIC_RPC_URL!,
    PRIVATE_KEY: process.env.PRIVATE_KEY!,
    NEXT_PUBLIC_IP_ASSET_REGISTRY: process.env.NEXT_PUBLIC_IP_ASSET_REGISTRY!,
    NEXT_PUBLIC_LICENSING_MODULE: process.env.NEXT_PUBLIC_LICENSING_MODULE!,
    NEXT_PUBLIC_ROYALTY_MODULE: process.env.NEXT_PUBLIC_ROYALTY_MODULE!,
    NEXT_PUBLIC_REGISTRATION_WORKFLOWS: process.env.NEXT_PUBLIC_REGISTRATION_WORKFLOWS!,
  };
}
