const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  // Registrieren Sie das `cypress-image-snapshot` Plugin
  addMatchImageSnapshotPlugin(on, config);

  // Rückgabe der konfigurierten `config`
  return config;
};
