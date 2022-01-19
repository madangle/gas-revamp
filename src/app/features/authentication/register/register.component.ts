import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../core/services/validation/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm : FormGroup = this.fb.group(
    {
      email : ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, this.validationService.passwordPatternValidator()]],
      rePassword: ['', [Validators.required]],
      nameArabicFname: [''],
      nameArabicMname: [''],
      nameArabicLname: [''],
      nameEnglishFname: ['', [Validators.required]],
      nameEnglishMname: [''],
      nameEnglishLname: ['', [Validators.required]],
      mobile: ['', [Validators.required, this.validationService.mobilePatternValidator()]],
      telephone: [''],
      fax: [''],
      postBox: ['']
    },
    {
      validator: this.validationService.MatchPassword('password', 'rePassword'),
    }
  );

  constructor(
    private fb : FormBuilder, 
    private validationService : ValidationService
  ) { }

  ngOnInit(): void {}

  onRegistrationSubmit(){
    console.log(this.registrationForm.value)
  }

}
