const { override, removeModuleScopePlugin } = require("customize-cra");

module.exports = override(removeModuleScopePlugin());
