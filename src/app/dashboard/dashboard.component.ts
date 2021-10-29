import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'

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
  private confirmdialogRef: MatDialogRef<ConfirmDialogComponent>;
  displayedColumns: string[] = ['name', 'brand', 'modelNumber', 'price', 'availableQuantity', 'order'];
  products = [];
  constructor(private api: ApiService, public dialog: MatDialog) { }
  orderQuantity = 0;
  ngOnInit(): void {
    localStorage.setItem('customerId', "629153f1-0dca-40c9-9386-1698dc9611b4")
    this.getProducts();
  }

  getProducts() {
    this.api.getProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products)
    }, (err) => {
      this.products = []
    })
  }
  placeOrder(element) {
    console.log(element)
    var userId = localStorage.getItem('customerId');
    var order = {
      customerId: userId,
      productId: element.id,
      productName: element.name,
      quantity: 1,
      status: 0
    }
    element.availableQuantity = element.availableQuantity - 1;
    console.log(order)
    this.api.saveOrder(order).subscribe((res) => {
      console.log(res);
      this.openLogoutConfirmDialog();
      this.api.saveProduct(element).subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      })
    }, (err) => {
      console.log(err);
    })
  }

  openLogoutConfirmDialog(): void {
    this.confirmdialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '25em',
      maxHeight: '30vh',
      data: {
        message: 'Order Successfully Placed',
        buttonText: {
          ok: 'OK',
        },
      },
    });
    this.confirmdialogRef.afterClosed().subscribe((confirmed) => {
      this.getProducts();
    });
  }
}
