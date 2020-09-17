module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!**/node_modules/**",
  ],

  moduleNameMapper: {
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/config/jest/setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^.+\\.yml$": "<rootDir>/config/jest/jsYamlLoader.js",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
}
