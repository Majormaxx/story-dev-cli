/**
 * Logger utilities for CLI output
 */

import chalk from 'chalk';
import ora, { Ora } from 'ora';

export class Logger {
  private spinner: Ora | null = null;

  /**
   * Log success message
   */
  success(message: string): void {
    console.log(chalk.green('✅'), message);
  }

  /**
   * Log error message
   */
  error(message: string): void {
    console.log(chalk.red('❌'), message);
  }

  /**
   * Log warning message
   */
  warn(message: string): void {
    console.log(chalk.yellow('⚠️ '), message);
  }

  /**
   * Log info message
   */
  info(message: string): void {
    console.log(chalk.blue('ℹ️ '), message);
  }

  /**
   * Log plain message
   */
  log(message: string): void {
    console.log(message);
  }

  /**
   * Start loading spinner
   */
  startSpinner(message: string): void {
    this.spinner = ora(message).start();
  }

  /**
   * Update spinner text
   */
  updateSpinner(message: string): void {
    if (this.spinner) {
      this.spinner.text = message;
    }
  }

  /**
   * Stop spinner with success
   */
  succeedSpinner(message?: string): void {
    if (this.spinner) {
      this.spinner.succeed(message);
      this.spinner = null;
    }
  }

  /**
   * Stop spinner with failure
   */
  failSpinner(message?: string): void {
    if (this.spinner) {
      this.spinner.fail(message);
      this.spinner = null;
    }
  }

  /**
   * Print header
   */
  header(message: string): void {
    console.log();
    console.log(chalk.bold.cyan('═'.repeat(60)));
    console.log(chalk.bold.cyan(`  ${message}`));
    console.log(chalk.bold.cyan('═'.repeat(60)));
    console.log();
  }

  /**
   * Print section
   */
  section(message: string): void {
    console.log();
    console.log(chalk.bold.white(message));
    console.log(chalk.gray('─'.repeat(40)));
  }
}

export const logger = new Logger();
