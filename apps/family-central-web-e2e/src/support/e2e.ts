import './commands';
import { addMatchImageSnapshotCommand } from '@simonsmith/cypress-image-snapshot/command';

// can also add any default options to be used
// by all instances of `matchImageSnapshot`
addMatchImageSnapshotCommand({
  failureThreshold: 0.2,
  comparisonMethod: 'ssim',
  capture: 'viewport',
  blackout: ['.some-element'],
  e2eSpecDir: 'src/e2e', // Dies sollte der relative Pfad zu den Testdateien sein
  customSnapshotsDir: 'snapshots/good', // Speichert die "good" Snapshots in diesem Ordner
  customDiffDir: 'snapshots/diffs',
});
