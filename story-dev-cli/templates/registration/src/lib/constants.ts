/**
 * Story Protocol Contract Addresses
 * Auto-populated from environment variables
 */

export const STORY_CONTRACTS = {
  IPAssetRegistry: process.env.NEXT_PUBLIC_IP_ASSET_REGISTRY!,
  LicensingModule: process.env.NEXT_PUBLIC_LICENSING_MODULE!,
  RoyaltyModule: process.env.NEXT_PUBLIC_ROYALTY_MODULE!,
  DisputeModule: process.env.NEXT_PUBLIC_DISPUTE_MODULE!,
  GroupingModule: process.env.NEXT_PUBLIC_GROUPING_MODULE!,
  LicenseRegistry: process.env.NEXT_PUBLIC_LICENSE_REGISTRY!,
  LicenseToken: process.env.NEXT_PUBLIC_LICENSE_TOKEN!,
  PILTemplate: process.env.NEXT_PUBLIC_PIL_TEMPLATE!,
  RegistrationWorkflows: process.env.NEXT_PUBLIC_REGISTRATION_WORKFLOWS!,
  LicenseAttachmentWorkflows: process.env.NEXT_PUBLIC_LICENSE_ATTACHMENT_WORKFLOWS!,
  RoyaltyWorkflows: process.env.NEXT_PUBLIC_ROYALTY_WORKFLOWS!,
  SPGNFTImpl: process.env.NEXT_PUBLIC_SPG_NFT_IMPL!,
};

export const NETWORK_CONFIG = {
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || '1315'),
  network: process.env.NEXT_PUBLIC_NETWORK || 'testnet',
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL!,
  blockExplorer: process.env.NEXT_PUBLIC_BLOCK_EXPLORER!,
};
