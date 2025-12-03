/**
 * Story Protocol Contract Addresses
 * These addresses are the same for both Mainnet (Chain ID: 1514) and Testnet (Chain ID: 1315)
 */

export interface StoryContracts {
  // Core Protocol Contracts
  IPAssetRegistry: string;
  LicensingModule: string;
  RoyaltyModule: string;
  DisputeModule: string;
  GroupingModule: string;
  ModuleRegistry: string;
  LicenseRegistry: string;
  LicenseToken: string;
  PILicenseTemplate: string;
  CoreMetadataModule: string;
  
  // Periphery / Workflow Contracts
  RegistrationWorkflows: string;
  LicenseAttachmentWorkflows: string;
  RoyaltyWorkflows: string;
  DerivativeWorkflows: string;
  GroupingWorkflows: string;
  SPGNFTImpl: string;
  
  // Misc
  Multicall3: string;
}

/**
 * Story Protocol Mainnet Contracts (Chain ID: 1514)
 */
export const STORY_MAINNET_CONTRACTS: StoryContracts = {
  // Core Protocol
  IPAssetRegistry: "0x77319B4031e6eF1250907aa00018B8B1c67a244b",
  LicensingModule: "0x04fbd8a2e56dd85CFD5500A4A4DfA955B9f1dE6f",
  RoyaltyModule: "0xD2f60c40fEbccf6311f8B47c4f2Ec6b040400086",
  DisputeModule: "0x9b7A9c70AFF961C799110954fc06F3093aeb94C5",
  GroupingModule: "0x69D3a7aa9edb72Bc226E745A7cCdd50D947b69Ac",
  ModuleRegistry: "0x022DBAAeA5D8fB31a0Ad793335e39Ced5D631fa5",
  LicenseRegistry: "0x529a750E02d8E2f15649c13D69a465286a780e24",
  LicenseToken: "0xFe3838BFb30B34170F00030B52eA4893d8aAC6bC",
  PILicenseTemplate: "0x2E896b0b2Fdb7457499B56AAaA4AE55BCB4Cd316",
  CoreMetadataModule: "0x6E81a25C99C6e8430aeC7353325EB138aFE5DC16",
  
  // Periphery / Workflows
  RegistrationWorkflows: "0xbe39E1C756e921BD25DF86e7AAa31106d1eb0424",
  LicenseAttachmentWorkflows: "0xcC2E862bCee5B6036Db0de6E06Ae87e524a79fd8",
  RoyaltyWorkflows: "0x9515faE61E0c0447C6AC6dEe5628A2097aFE1890",
  DerivativeWorkflows: "0x9e2d496f72C547C2C535B167e06ED8729B374a4f",
  GroupingWorkflows: "0xD7c0beb3aa4DCD4723465f1ecAd045676c24CDCd",
  SPGNFTImpl: "0x5266215a00c31AaA2f2BB7b951Ea0028Ea8b4e37",
  
  // Misc
  Multicall3: "0xcA11bde05977b3631167028862bE2a173976CA11",
};

/**
 * Story Protocol Testnet Contracts (Chain ID: 1315)
 * Note: Same addresses as mainnet
 */
export const STORY_TESTNET_CONTRACTS: StoryContracts = STORY_MAINNET_CONTRACTS;

/**
 * Get contract addresses for a specific network
 */
export function getContractAddresses(network: 'mainnet' | 'testnet'): StoryContracts {
  return network === 'mainnet' ? STORY_MAINNET_CONTRACTS : STORY_TESTNET_CONTRACTS;
}

/**
 * Default PIL Terms ID for Non-Commercial Social Remixing
 */
export const DEFAULT_LICENSE_TERMS_ID = 1;
