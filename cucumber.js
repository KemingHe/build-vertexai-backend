// cucumber.js
let common = [
  // Specify feature files,
  // load TypeScript module,
  // load step defs,
  // load custom fomatters:
  'features/**/*.feature',
  '--require-module ts-node/register',
  '--require step-definitions/**/*.ts',
  '--format progress-bar',
  '--format @cucumber/pretty-formatter'
].join(' ');

module.exports = {
  default: common
};
