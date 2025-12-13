/**
 * Story Dev CLI
 * Main entry point for the CLI application
 */

import { Command } from 'commander';
import { createQuickstart } from './commands/create';

const program = new Command();

program
  .name('story-dev-cli')
  .description('Story Dev CLI - Generate production-ready Story Protocol projects in 2 minutes')
  .version('1.0.1');

// Create Quickstart Command
program
  .command('create:quickstart')
  .description('Generate a Story SDK quickstart project')
  .option('--interactive', 'Interactive mode (default)', true)
  .option('--name <string>', 'Project name')
  .option('--template <string>', 'Template name (registration)')
  .option('--network <string>', 'Network (testnet, mainnet)')
  .option('--force', 'Overwrite existing directory')
  .action(createQuickstart);

// Parse arguments
program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
