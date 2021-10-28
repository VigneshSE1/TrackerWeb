import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  displayedColumns: string[] = ['customerId', 'productName', 'quantity', 'invoiceDate', 'status', 'order'];
  orders = [];
  orderStatus = [
    { value: 0, viewValue: 'Ordered' },
    { value: 1, viewValue: 'Shipped' },
    { value: 2, viewValue: 'Dispatched' },
    { value: 3, viewValue: 'Delivered' }
  ];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getOrders().subscribe((res) => {
      this.orders = res;
    }, (err) => {
      this.orders = []
    })
  }

  updateStatus(element) {
    this.api.saveOrder(element).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err)
    })
  }
}
