import { AppComponent } from './app.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
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

  it(`should have as title 'family-central'`, () => {
    const app = spectator.component; // Access the component instance
    expect(app.title).toEqual('family-central');
  });
});
