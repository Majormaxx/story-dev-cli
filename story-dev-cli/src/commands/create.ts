/**
 * Create Quickstart Command
 * Generates a new Story Protocol project from template
 */

import inquirer from 'inquirer';
import * as path from 'path';
import { logger } from '../utils/logger';
import { validatePrivateKey, SECURITY_WARNINGS, maskPrivateKey } from '../utils/security';
import { validateProjectName, isDirectoryEmpty, generateProject, ProjectConfig } from '../utils/file-generator';
import { getNetworkConfig } from '../utils/network';

export interface CreateOptions {
  interactive?: boolean;
  name?: string;
  template?: string;
  network?: string;
  force?: boolean;
}

export async function createQuickstart(options: CreateOptions): Promise<void> {
  try {
    logger.header('Story Dev CLI - Create Quickstart');
    
    let projectName: string;
    let template: 'registration' | 'licensing' | 'royalty';
    let network: 'mainnet' | 'testnet';
    let privateKey: string;
    
    if (options.interactive !== false) {
      // Interactive mode
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'projectName',
          message: 'Project name:',
          default: 'my-story-app',
          validate: (input: string) => {
            if (!validateProjectName(input)) {
              return 'Project name must be alphanumeric with hyphens/underscores only';
            }
            return true;
          },
        },
        {
          type: 'list',
          name: 'template',
          message: 'Select template:',
          choices: [
            { name: 'IP Registration (register new assets)', value: 'registration' },
            // TODO: Add licensing and royalty templates
            // { name: 'Licensing (attach licenses & mint tokens)', value: 'licensing' },
            // { name: 'Royalty Management (claim revenue)', value: 'royalty' },
          ],
          default: 'registration',
        },
        {
          type: 'list',
          name: 'network',
          message: 'Select network:',
          choices: [
            { name: 'Testnet (Aeneid) - Recommended for development', value: 'testnet' },
            { name: 'Mainnet - Production use only', value: 'mainnet' },
          ],
          default: 'testnet',
        },
        {
          type: 'password',
          name: 'privateKey',
          message: 'Private key (will be stored in .env):',
          validate: (input: string) => {
            if (!validatePrivateKey(input)) {
              return 'Invalid private key format. Must be 64 hex characters (with or without 0x prefix)';
            }
            return true;
          },
        },
      ]);
      
      projectName = answers.projectName;
      template = answers.template;
      network = answers.network;
      privateKey = answers.privateKey;
    } else {
      // Non-interactive mode (use options)
      projectName = options.name || 'my-story-app';
      template = (options.template as any) || 'registration';
      network = (options.network as any) || 'testnet';
      privateKey = process.env.PRIVATE_KEY || '';
      
      if (!validatePrivateKey(privateKey)) {
        logger.error('Invalid private key. Set PRIVATE_KEY environment variable.');
        process.exit(1);
      }
    }
    
    // Show security warning
    if (network === 'mainnet') {
      logger.warn('You selected MAINNET. Please ensure you understand the risks.');
    }
    
    logger.log(SECURITY_WARNINGS.privateKey);
    
    if (network === 'testnet') {
      logger.log(SECURITY_WARNINGS.testnetRecommendation);
    }
    
    // Confirm before proceeding
    const { confirm } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: 'I understand the security implications. Continue?',
        default: true,
      },
    ]);
    
    if (!confirm) {
      logger.warn('Operation cancelled.');
      return;
    }
    
    // Check target directory
    const targetPath = path.join(process.cwd(), projectName);
    const isEmpty = await isDirectoryEmpty(targetPath);
    
    if (!isEmpty && !options.force) {
      logger.error(`Directory "${projectName}" already exists and is not empty.`);
      logger.info('Use --force to overwrite.');
      process.exit(1);
    }
    
    // Generate project
    logger.section('Generating Project');
    logger.startSpinner('Creating project structure...');
    
    const config: ProjectConfig = {
      projectName,
      template,
      network,
      privateKey,
      targetPath,
    };
    
    await generateProject(config);
    
    logger.succeedSpinner('Project structure created');
    
    // Show success message
    const networkConfig = getNetworkConfig(network);
    
    logger.section('Project Created Successfully!');
    logger.log('');
    logger.info(`Project: ${projectName}`);
    logger.info(`Template: ${template}`);
    logger.info(`Network: ${networkConfig.name} (Chain ID: ${networkConfig.chainId})`);
    logger.info(`Private Key: ${maskPrivateKey(privateKey)}`);
    logger.log('');
    
    logger.section('Next Steps');
    logger.log(`
1. Navigate to your project:
   ${logger.log.bind(null, `cd ${projectName}`)}

2. Install dependencies:
   npm install

3. Start development server:
   npm run dev

4. Open your browser:
   http://localhost:3000
`);
    
    if (network === 'testnet') {
      logger.log('');
      logger.info(`Get testnet tokens: ${networkConfig.faucet}`);
    }
    
    logger.log('');
    logger.success('Happy building on Story Protocol!');
    logger.log('');
    logger.info('Documentation: https://docs.story.foundation');
    logger.info('Discord: https://discord.gg/storybuilders');
    
  } catch (error) {
    logger.failSpinner('Failed to create project');
    logger.error(error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }
}
