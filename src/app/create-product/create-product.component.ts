import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  addProductForm: FormGroup;
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      Name: new FormControl(''),
      Brand: new FormControl(''),
      ModelNumber: new FormControl(''),
      AvailableQuantity: new FormControl(),
      Price: new FormControl()
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.addProductForm.controls;
  }
  onSaveProductDetails(): void {
    console.log(this.addProductForm.value);
  }
}
