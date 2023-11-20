const nxPreset = require('@nx/jest/preset');

module.exports = {
  ...nxPreset,
  maxWorkers: 4,
  "testEnvironment": "jsdom"
};
