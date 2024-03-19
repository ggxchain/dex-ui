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
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
};

// Exporting Jest configuration
export default createJestConfig(config);
