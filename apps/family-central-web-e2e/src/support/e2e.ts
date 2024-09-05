import './commands';
import { addMatchImageSnapshotCommand } from '@simonsmith/cypress-image-snapshot/command';

// can also add any default options to be used
// by all instances of `matchImageSnapshot`
addMatchImageSnapshotCommand({
  failureThreshold: 0.2,
  comparisonMethod: 'ssim',
  capture: 'viewport',
  customSnapshotsDir: 'snapshots/base', // Speichert die "good" Snapshots in diesem Ordner
  customDiffDir: 'snapshots/diff',
});
