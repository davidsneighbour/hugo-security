const defaultStandardVersion = require("@dnb-org/standard-version-config");

const localStandardVersion = {
  bumpFiles: [
    ...defaultStandardVersion.bumpFiles,
    { filename: "data/dnb/security/version.json", type: "json" },
  ],
};

module.exports = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
