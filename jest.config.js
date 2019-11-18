module.exports = {
  collectCoverageFrom: ["src/**/*.js{,x}"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  clearMocks: true,
  testMatch: ["**/test/**/*.spec.js{,x}"],
  setupFiles: ["./test/setup.js"],
  testURL: "http://localhost"
};
