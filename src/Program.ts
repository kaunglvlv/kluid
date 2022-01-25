import * as packageDetail from '../package.json';
import clipboard from 'copy-paste';
import colors from 'colors';
import { Command, Option } from 'commander';
import { CliName, KluidOptions, UidType } from './definitions';
import { FactoryType, createUuid, createKsuid, createUlid } from './factories';

const factories: Record<UidType, FactoryType> = {
  uuid: createUuid,
  ksuid: createKsuid,
  ulid: createUlid,
};

export default class Program {
  static run(): void {
    const program = new Command(CliName);
    program.version(packageDetail.version);

    program
      .description('Create a unique identifier to the clipboard')
      .addOption(
        new Option('-u, --use <type>', 'uid type')
          .choices(['uuid', 'ksuid', 'ulid'])
          .default('uuid')
      )
      .addOption(new Option('-e, --empty', 'create empty uuid'))
      ;

    program.parse();

    const options = program.opts() as KluidOptions;
    const factory = factories[options.use];

    const id = factory(options);
    clipboard.copy(id);

    console.log(colors.green(`${id}`));
  }
}