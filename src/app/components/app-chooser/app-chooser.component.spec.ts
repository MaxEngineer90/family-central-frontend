import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChooserComponent } from './app-chooser.component';

describe('AppChooserComponent', () => {
  let component: AppChooserComponent;
  let fixture: ComponentFixture<AppChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppChooserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
