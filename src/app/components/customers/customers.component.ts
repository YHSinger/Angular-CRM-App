import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/shared/interfaces/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers$: Observable<Customer[]>;

  constructor(private customerService: CustomersService) {
    this.customers$ = this.customerService.getAll();
  }

  ngOnInit(): void {}
}
