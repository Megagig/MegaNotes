import fs from 'node:fs';
import { it, expect, describe, beforeEach, vi } from 'vitest';
import { loadEnv } from '../utils/load-env';

describe('loadEnv', () => {
  beforeEach(() => {
    // Mock fs.readFileSync before each test
    vi.spyOn(fs, 'readFileSync').mockReturnValue(`
      KEY1=value1
      KEY2=value2
    `);
  });

  it('should call readFileSync function once', () => {
    loadEnv();
    expect(fs.readFileSync).toHaveBeenCalledTimes(1);
  });

  it('should load env. variables from the .env file', () => {
    loadEnv();
    expect(process.env.KEY1).toBe('value1');
    expect(process.env.KEY2).toBe('value2');
  });
});
