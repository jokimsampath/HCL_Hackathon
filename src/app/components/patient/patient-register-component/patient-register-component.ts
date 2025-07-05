import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientRegisterService } from '../../../services/patient-register-service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-register-component',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule],
  templateUrl: './patient-register-component.html',
  styleUrls: ['./patient-register-component.css']
})
export class PatientRegisterComponent {
  patientRegisterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private patientRegisterService: PatientRegisterService
  ) {
    this.patientRegisterForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required, Validators.minLength(6)]],
      dob: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.patientRegisterForm.valid) {
      // Call the service to register the patient
      this.patientRegisterService.registerPatient(this.patientRegisterForm.value)
        .subscribe(response => {
          if (response.success) {
            console.log(response.message);
          } else {
            console.error('Registration failed');
          }
        });
    }
  }
}
