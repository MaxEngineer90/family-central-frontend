import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run purchase-manager:serve:development',
        production: 'nx run purchase-manager:serve:production',
      },
      ciWebServerCommand: 'nx run purchase-manager:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on) {
      addMatchImageSnapshotPlugin(on);
      on('task', {
        'image:snapshot': ({ image }) => {
          const customSnapshotsDir = './snapshots';
          const customDiffDir = './snapshots/diff';

          return {
            customSnapshotsDir,
            customDiffDir,
          };
        },
      });
    },
  },
});
