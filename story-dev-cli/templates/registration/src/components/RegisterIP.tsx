/**
 * IP Registration Component
 * Allows users to register new IP assets on Story Protocol
 */

'use client';

import { useState } from 'react';
import { storyClient } from '../client/story';
import { IPMetadata, RegistrationResult, TransactionStatus } from '../lib/types';
import { getExplorerUrl, getIPExplorerUrl, createMetadataURI, generateMetadataHash } from '../lib/utils';
import { NETWORK_CONFIG } from '../lib/constants';

export default function RegisterIP() {
  const [metadata, setMetadata] = useState<IPMetadata>({
    title: '',
    description: '',
    ipType: 'Story',
    creators: [],
    tags: [],
  });
  
  const [status, setStatus] = useState<TransactionStatus>({
    loading: false,
    success: false,
    error: null,
  });
  
  const [result, setResult] = useState<RegistrationResult | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus({ loading: true, success: false, error: null });
    setResult(null);

    try {
      // Create metadata URI (in production, upload to IPFS)
      const metadataURI = createMetadataURI(metadata);
      const metadataHash = generateMetadataHash(metadata);

      // Register IP Asset using Story SDK
      const response = await storyClient.ipAsset.mintAndRegisterIp({
        spgNftContract: process.env.NEXT_PUBLIC_SPG_NFT_IMPL as `0x${string}`,
        ipMetadata: {
          ipMetadataURI: metadataURI,
          ipMetadataHash: metadataHash as `0x${string}`,
          nftMetadataURI: metadataURI,
          nftMetadataHash: metadataHash as `0x${string}`,
        },
      });

      setResult({
        ipId: response.ipId || '',
        tokenId: response.tokenId?.toString() || '',
        txHash: response.txHash || '',
      });

      setStatus({
        loading: false,
        success: true,
        error: null,
        txHash: response.txHash,
      });

      // Reset form
      setMetadata({
        title: '',
        description: '',
        ipType: 'Story',
        creators: [],
        tags: [],
      });
    } catch (error) {
      console.error('Registration failed:', error);
      setStatus({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Register IP Asset
        </h2>
        <p className="text-gray-600 mb-6">
          Register your intellectual property on Story Protocol
        </p>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              required
              value={metadata.title}
              onChange={(e) => setMetadata({ ...metadata, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-story-primary focus:border-transparent"
              placeholder="My Amazing Creation"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              required
              value={metadata.description}
              onChange={(e) => setMetadata({ ...metadata, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-story-primary focus:border-transparent"
              placeholder="Describe your IP asset..."
            />
          </div>

          <div>
            <label htmlFor="ipType" className="block text-sm font-medium text-gray-700 mb-2">
              IP Type
            </label>
            <input
              type="text"
              id="ipType"
              value={metadata.ipType}
              onChange={(e) => setMetadata({ ...metadata, ipType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-story-primary focus:border-transparent"
              placeholder="Story, Art, Music, etc."
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-story-primary hover:bg-story-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.loading ? 'Registering...' : 'Register IP Asset'}
          </button>
        </form>

        {/* Success Message */}
        {status.success && result && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              ✅ IP Asset Registered Successfully!
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-green-800">
                <span className="font-medium">IP ID:</span>{' '}
                <a
                  href={getIPExplorerUrl(result.ipId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-story-primary hover:underline"
                >
                  {result.ipId}
                </a>
              </p>
              <p className="text-green-800">
                <span className="font-medium">Token ID:</span> {result.tokenId}
              </p>
              <p className="text-green-800">
                <span className="font-medium">Transaction:</span>{' '}
                <a
                  href={getExplorerUrl(result.txHash)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-story-primary hover:underline"
                >
                  View on Explorer
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {status.error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="text-lg font-semibold text-red-900 mb-2">
              ❌ Registration Failed
            </h3>
            <p className="text-sm text-red-800">{status.error}</p>
          </div>
        )}

        {/* Network Info */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <span className="font-medium">Network:</span> {NETWORK_CONFIG.network === 'mainnet' ? 'Story Mainnet' : 'Story Aeneid Testnet'}
          </p>
          <p className="text-sm text-blue-800">
            <span className="font-medium">Chain ID:</span> {NETWORK_CONFIG.chainId}
          </p>
        </div>
      </div>
    </div>
  );
}
