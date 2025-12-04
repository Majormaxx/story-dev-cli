/**
 * TypeScript type definitions
 */

export interface IPMetadata {
  title: string;
  description: string;
  ipType?: string;
  creators?: string[];
  tags?: string[];
}

export interface RegistrationResult {
  ipId: string;
  tokenId: string;
  txHash: string;
}

export interface TransactionStatus {
  loading: boolean;
  success: boolean;
  error: string | null;
  txHash?: string;
}
