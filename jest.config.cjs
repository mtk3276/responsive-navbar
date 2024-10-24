module.exports = {
    verbose: true,
    testEnvironment: "jsdom",
    setupFilesAfterEnv: [
      "<rootDir>/setupTests.js"
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
          "<rootDir>/__mocks__/fileMock.cjs",
        "\\.(css|less)$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1"
      },
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.svg$": "<rootDir>/svgTransform.cjs"
    },
    collectCoverageFrom: [
      "src/**/*.js", "src/**/*.jsx", "!src/**/sub.js", "!src/main.jsx", "!src/router.jsx"
    ],
    modulePathIgnorePatterns: ["<rootDir>/test.js"]
  };
