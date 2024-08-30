import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PurchaseManagerComponent } from './purchase-manager.component';

describe('PurchaseManagerComponent', () => {
  let component: PurchaseManagerComponent;
  let fixture: ComponentFixture<PurchaseManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseManagerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
