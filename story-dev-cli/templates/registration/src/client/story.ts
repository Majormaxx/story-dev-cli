/**
 * Story Protocol SDK Client
 * Configured with environment variables
 */

import { StoryClient, StoryConfig } from '@story-protocol/core-sdk';
import { http } from 'viem';
import { privateKeyToAccount, Address } from 'viem/accounts';

// Validate environment variables
if (!process.env.PRIVATE_KEY) {
  throw new Error('PRIVATE_KEY is not set in environment variables');
}

if (!process.env.NEXT_PUBLIC_RPC_URL) {
  throw new Error('NEXT_PUBLIC_RPC_URL is not set in environment variables');
}

// Create account from private key
const account = privateKeyToAccount(process.env.PRIVATE_KEY as Address);

// Story SDK configuration
const config: StoryConfig = {
  account: account,
  transport: http(process.env.NEXT_PUBLIC_RPC_URL),
  chainId: process.env.NEXT_PUBLIC_NETWORK === 'mainnet' ? 'mainnet' : 'aeneid',
};

// Initialize Story Client
export const storyClient = StoryClient.newClient(config);

// Export account for use in components
export { account };
