/**
 * Network Configuration for Story Protocol
 */

export interface NetworkConfig {
  chainId: number;
  name: string;
  rpcUrl: string;
  blockExplorer: string;
  faucet?: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
}

/**
 * Story Mainnet Configuration (Chain ID: 1514)
 */
export const STORY_MAINNET: NetworkConfig = {
  chainId: 1514,
  name: "Story Mainnet",
  rpcUrl: "https://rpc.story.foundation",
  blockExplorer: "https://www.storyscan.io",
  nativeCurrency: {
    name: "IP",
    symbol: "IP",
    decimals: 18,
  },
};

/**
 * Story Testnet (Aeneid) Configuration (Chain ID: 1315)
 */
export const STORY_TESTNET: NetworkConfig = {
  chainId: 1315,
  name: "Story Aeneid Testnet",
  rpcUrl: "https://testnet.storyscan.io/api/eth-rpc",
  blockExplorer: "https://testnet.storyscan.io",
  faucet: "https://faucet.story.foundation",
  nativeCurrency: {
    name: "IP",
    symbol: "IP",
    decimals: 18,
  },
};

/**
 * Get network configuration
 */
export function getNetworkConfig(network: 'mainnet' | 'testnet'): NetworkConfig {
  return network === 'mainnet' ? STORY_MAINNET : STORY_TESTNET;
}

/**
 * Validate RPC URL by attempting to connect
 */
export async function validateRpcUrl(rpcUrl: string): Promise<boolean> {
  try {
    const response = await fetch(rpcUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'net_version',
        params: [],
      }),
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}

/**
 * Get chain ID from RPC
 */
export async function getChainId(rpcUrl: string): Promise<number | null> {
  try {
    const response = await fetch(rpcUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_chainId',
        params: [],
      }),
    });
    const data = await response.json() as { result: string };
    return parseInt(data.result, 16);
  } catch (error) {
    return null;
  }
}
