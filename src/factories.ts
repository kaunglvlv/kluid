import ksuid from 'ksuid';
import { KluidOptions } from './definitions';
import { v4 } from 'uuid';
import { ulid } from 'ulid';

const EMPTY_UUID = '00000000-0000-0000-0000-000000000000';

/**
 * UID factory method
 */
export interface FactoryType {
  (options: KluidOptions): string;
}

/**
 * Create a new uuid
 * @param options Input options
 * @returns 
 */
export const createUuid: FactoryType = (options): string => options.empty ? EMPTY_UUID : v4();

/**
 * Create a new ulid
 * @returns ulid
 */
export const createUlid: FactoryType = (): string => ulid();

/**
 * Create a new ksuid
 * @returns Random ksuid
 */
export const createKsuid: FactoryType = (): string => ksuid.randomSync().string;