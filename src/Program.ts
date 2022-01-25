import * as packageDetail from '../package.json';
import clipboard from 'copy-paste';
import colors from 'colors';
import { Command } from 'commander';
import { CliName, KluidOptions } from './definitions';
import { createUuid } from './factories';

export default class Program {
  static run(): void {
    const program = new Command(CliName);
    program.version(packageDetail.version);

    program
      .description('Create a unique identifier to the clipboard')
      .option('-e, --empty', 'create empty uuid')
      ;

    program.parse();

    const options = program.opts() as KluidOptions;
    const id = createUuid(options);

    clipboard.copy(id);
    console.log(colors.green(`${id}`));
  }
}