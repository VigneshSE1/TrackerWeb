import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  addProductForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

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
    this.api.saveProduct(this.addProductForm.value).subscribe((res) => {
      console.log(res);
      this.addProductForm.reset();
    }, (err) => {
      console.log(err);
    })
  }
}
