/**
 * CLI name
 */
export const CliName = 'kluid';

/**
 * Unique identifier types
 */
export type UidType = 'uuid' | 'ulid' | 'ksuid';

/**
 * Kluid options
 */
export interface KluidOptions {
  /**
   * Use the specified unique identifier type
   */
  use: UidType;

  /**
   * Create an empty uuid (ex: 00000000-0000-0000-0000-000000000000). This will only work for uuid.
   */
  empty?: boolean; 
}