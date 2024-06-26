import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['./src/**/__tests__/*.test.ts'],
        environment: 'happy-dom',
        clearMocks: true,
        unstubGlobals: true,
        unstubEnvs: true
    }
});
