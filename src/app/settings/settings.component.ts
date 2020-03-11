import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  accountForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initAccountForm();
  }

  initAccountForm() {
    this.accountForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.required
      ])],
      gender: ['', Validators.compose([
        Validators.required
      ])],
      about: ['',  Validators.compose([
        Validators.required
      ])],
      phone: ['', Validators.compose([
        Validators.required,
      ])],
      email: [{value: 'tamer@gmail.com', disabled: true}],
      username: [{value: 'tamer', disabled: true}]
    })
  }

  isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.accountForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}

}
