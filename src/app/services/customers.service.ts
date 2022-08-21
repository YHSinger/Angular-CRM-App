import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Customer } from '../shared/interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customerRef: AngularFirestoreCollection<Customer>;

  constructor(private customers: AngularFirestore) {
    this.customerRef = this.customers.collection('customers');
  }

  add(customer: Customer) {
    return this.customerRef.add(customer);
  }

  getAll() {
    return this.customerRef.valueChanges({ idField: 'id' });
  }
}
