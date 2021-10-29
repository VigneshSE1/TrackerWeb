import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  addCustomerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

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
    this.api.saveCustomer(this.addCustomerForm.value).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err)
    })
  }
}
