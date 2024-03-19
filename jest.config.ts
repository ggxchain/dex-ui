import nextJest from 'next/jest.js';
import polkadotConfig from "@polkadot/dev-test/browser";

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

const config = {
    ...polkadotConfig,
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// Exporting Jest configuration
export default createJestConfig(config);
