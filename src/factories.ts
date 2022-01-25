import { v4 } from 'uuid';
import { KluidOptions } from './definitions';

const EMPTY_UUID = '00000000-0000-0000-0000-000000000000';

export const createUuid = ({ empty }: KluidOptions): string => {
  if (empty)
    return EMPTY_UUID;

  return v4();
}