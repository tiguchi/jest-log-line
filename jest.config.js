const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    modulePaths: ["src", "test"]
};

module.exports = createJestConfig(customJestConfig);
