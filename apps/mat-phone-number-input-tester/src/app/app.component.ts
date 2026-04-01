import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';

import { MatPhoneNumberInput } from 'mat-phone-number-input';

@Component({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatPhoneNumberInput,
    ReactiveFormsModule,
    JsonPipe,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private fb = inject(FormBuilder);

  title = 'mat-phone-number-input-tester';
  form1 = this.fb.group({
    phone: ['+46701234567', [Validators.required]],
    phone2: [''],
  });

  phone: string = '+5511912347894';
  phoneDisabled: boolean = false;

  name: string = '';
  nameDisabled: boolean = false;
  useInternationalFormat: boolean = true;

  ngOnInit(): void {
    this.form1.valueChanges.subscribe(console.log);
    // this.form1.controls.phone.setValidators([phoneNumberValidator]);
  }

  toggleDisable() {
    let control = this.form1.controls.phone;
    if (control.disabled) {
      control.enable();
    } else {
      control.disable();
    }
  }
}
