import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Inject } from '@angular/core';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'brand', 'modelNumber', 'price', 'availableQuantity', 'order'];
  products = [];
  constructor(private api: ApiService) { }
  orderQuantity = 0;
  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.products = res;
    }, (err) => {
      this.products = []
    })
  }

  placeOrder(element) { console.log('element') }
}
