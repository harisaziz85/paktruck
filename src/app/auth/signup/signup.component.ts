import { Component } from '@angular/core';
import { faTruck, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  faTruck = faTruck;
  faEnvelope = faEnvelope;
  selectedRole: string = 'individual';
  userForm: FormGroup;
  isPasswordVisible: boolean = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  constructor(private fb: FormBuilder) {
    
    this.userForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      cnic: ['', Validators.required],
      type: ['individual', Validators.required],
      shopName: [''],
      shopAddress: [''],
    });

    this.userForm.get('type')?.valueChanges.subscribe((value) => {
      if (value === 'shop') {
        this.userForm.get('shopName')?.setValidators(Validators.required);
        this.userForm.get('shopAddress')?.setValidators(Validators.required);
      } else {
        this.userForm.get('shopName')?.clearValidators();
        this.userForm.get('shopAddress')?.clearValidators();
      }
      this.userForm.get('shopName')?.updateValueAndValidity();
      this.userForm.get('shopAddress')?.updateValueAndValidity();
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
