module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  testRegex: ".(test|spec).ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  coverageDirectory: "./coverage",
  testEnvironment: "node",
};
