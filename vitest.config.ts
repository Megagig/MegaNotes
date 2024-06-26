///<reference types="vitest"/>

import { defineConfig } from 'vite';
export default defineConfig({
  test: {
    include: ['**/__tests__/**.test.ts'],
    environment: 'node',
    setupFiles: [],
    restoreMocks: true,
    coverage: {
      provider: 'v8',
      exclude: ['**/__tests__/**'],
      include: ['src/**/*.ts'],
      all: true,
    },
  },
});
