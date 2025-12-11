/**
 * Utility functions
 */

import { NETWORK_CONFIG } from './constants';
import { checkEnvironment } from './env';

// Validate environment on module load
if (typeof window === 'undefined') {
  checkEnvironment();
}

/**
 * Shorten address for display
 */
export function shortenAddress(address: string, chars = 4): string {
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

/**
 * Get block explorer URL for transaction
 */
export function getExplorerUrl(txHash: string): string {
  return `${NETWORK_CONFIG.blockExplorer}/tx/${txHash}`;
}

/**
 * Get block explorer URL for IP Asset
 */
export function getIPExplorerUrl(ipId: string): string {
  return `${NETWORK_CONFIG.blockExplorer}/address/${ipId}`;
}

/**
 * Format timestamp
 */
export function formatTimestamp(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleString();
}

/**
 * Create metadata URI (simplified - in production, upload to IPFS)
 */
export function createMetadataURI(metadata: any): string {
  // In production, upload to IPFS and return the URI
  // For now, return a data URI
  const jsonString = JSON.stringify(metadata);
  return `data:application/json;base64,${Buffer.from(jsonString).toString('base64')}`;
}

/**
 * Generate metadata hash
 */
export function generateMetadataHash(metadata: any): string {
  // In production, use proper hashing
  // For now, return a placeholder
  return '0x' + '0'.repeat(64);
}
