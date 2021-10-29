import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }


  // baseUrl = 'https://changefeed-webapi.azurewebsites.net/api/';
  baseUrl = 'https://localhost:5001/api/';


  saveProductUrl = this.baseUrl + 'Product/addOrUpdate';
  getProductbyIdUrl = this.baseUrl + 'Product/'
  getProductUrl = this.baseUrl + 'Product'

  saveCustomerUrl = this.baseUrl + 'Customer/addOrUpdate';
  getCustomerbyIdUrl = this.baseUrl + 'Customer/'
  getCustomerUrl = this.baseUrl + 'Customer'

  saveOrderUrl = this.baseUrl + 'Order/addOrUpdate';
  getOrderbyIdUrl = this.baseUrl + 'Order/'
  getOrderUrl = this.baseUrl + 'Order'


  //Products
  saveProduct(product) {
    const productDetailResult = this.http.post<any>(this.saveProductUrl, product);
    return productDetailResult;
  }
  getProductByid(id) {
    const product = this.http.get<any>(this.getProductbyIdUrl + id);
    return product;
  }
  getProducts() {
    const product = this.http.get<any>(this.getProductUrl);
    return product;
  }


  //Customers
  saveCustomer(Customer) {
    const CustomerDetailResult = this.http.post<any>(this.saveCustomerUrl, Customer);
    return CustomerDetailResult;
  }
  getCustomerByid(id) {
    const Customer = this.http.get<any>(this.getCustomerbyIdUrl + id);
    return Customer;
  }
  getCustomers() {
    const Customer = this.http.get<any>(this.getCustomerUrl);
    return Customer;
  }

  //Customers
  saveOrder(Order) {
    const OrderDetailResult = this.http.post<any>(this.saveOrderUrl, Order);
    return OrderDetailResult;
  }
  getOrderByid(id) {
    const Order = this.http.get<any>(this.getOrderbyIdUrl + id);
    return Order;
  }
  getOrders() {
    const Order = this.http.get<any>(this.getOrderUrl);
    return Order;
  }
}
