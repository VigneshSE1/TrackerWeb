import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  private confirmdialogRef: MatDialogRef<ConfirmDialogComponent>;
  displayedColumns: string[] = ['customerId', 'productName', 'quantity', 'invoiceDate', 'status', 'order'];
  orders = [];
  orderStatus = [
    { value: 0, viewValue: 'Ordered' },
    { value: 1, viewValue: 'Shipped' },
    { value: 2, viewValue: 'Dispatched' },
    { value: 3, viewValue: 'Delivered' }
  ];

  constructor(private api: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.api.getOrders().subscribe((res) => {
      this.orders = res;
      console.log(this.orders)
    }, (err) => {
      this.orders = []
    })
  }

  updateStatus(element) {
    this.api.saveOrder(element).subscribe((res) => {
      console.log(res);
      this.openLogoutConfirmDialog()
    }, (err) => {
      console.log(err)
    })
  }
  openLogoutConfirmDialog(): void {
    this.confirmdialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '25em',
      maxHeight: '30vh',
      data: {
        message: 'Order Status Updated, Check Email',
        buttonText: {
          ok: 'OK',
        },
      },
    });
    this.confirmdialogRef.afterClosed().subscribe((confirmed) => {
    });
  }
}
