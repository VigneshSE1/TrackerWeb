import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  addCustomerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.addCustomerForm = this.formBuilder.group({
      Name: new FormControl(''),
      Address: new FormControl(''),
      Pincode: new FormControl(),
      EmailId: new FormControl(),
      MobileNumber: new FormControl()
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.addCustomerForm.controls;
  }
  onSaveCustomerDetails(): void {
    console.log(this.addCustomerForm.value);
  }
}
