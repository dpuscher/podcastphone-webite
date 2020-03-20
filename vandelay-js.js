const path = require("path");

const includes = ["src"];

module.exports = {
  includePaths: includes.map(folder => path.join(__dirname, folder)),
  useSingleQuotes: false,
  excludePatterns: ["**/*.spec.*", "**/__mocks__/*"],
  importGroups: ["react", "react-dom", "redux", "react-redux", "prop-types"],
};
