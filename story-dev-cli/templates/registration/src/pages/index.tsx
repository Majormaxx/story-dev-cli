/**
 * Main Application Page
 * IP Registration on Story Protocol
 */

import RegisterIP from '../components/RegisterIP';

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Story Protocol
          </h1>
          <p className="text-xl text-gray-600">
            Register Your Intellectual Property On-Chain
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="https://docs.story.foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-story-primary hover:underline"
            >
              Documentation
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://discord.gg/storybuilders"
              target="_blank"
              rel="noopener noreferrer"
              className="text-story-primary hover:underline"
            >
              Discord
            </a>
            <span className="text-gray-400">•</span>
            <a
              href={process.env.NEXT_PUBLIC_BLOCK_EXPLORER}
              target="_blank"
              rel="noopener noreferrer"
              className="text-story-primary hover:underline"
            >
              Explorer
            </a>
          </div>
        </div>

        {/* Registration Component */}
        <RegisterIP />

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Generated with{' '}
            <a
              href="https://www.npmjs.com/package/@story-protocol/cli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-story-primary hover:underline"
            >
              @story-protocol/cli
            </a>
          </p>
          <p className="mt-2">
            Learn more at{' '}
            <a
              href="https://docs.story.foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-story-primary hover:underline"
            >
              docs.story.foundation
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
