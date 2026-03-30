import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPhoneNumberInput } from './mat-phone-number-input.component';

describe('MatPhoneNumberInput', () => {
  let component: MatPhoneNumberInput;
  let fixture: ComponentFixture<MatPhoneNumberInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatPhoneNumberInput],
    }).compileComponents();

    fixture = TestBed.createComponent(MatPhoneNumberInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
