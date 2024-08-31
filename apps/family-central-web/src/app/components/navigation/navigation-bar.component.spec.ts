import { NavigationBarComponent } from './navigation-bar.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('NavigationBarComponent', () => {
  let spectator: Spectator<NavigationBarComponent>;

  const createComponent = createComponentFactory({
    component: NavigationBarComponent,
    detectChanges: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the component', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render label', () => {
    spectator.detectChanges(); // Trigger change detection
    const titleElement = spectator.query('label'); // Query for <h1> element
    expect(titleElement?.textContent).toContain('Family-Central');
  });
});
