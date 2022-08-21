import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/shared/interfaces/customer';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss'],
})
export class CustomerNewComponent implements OnInit {
  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  resetForm(form: NgForm) {
    form.resetForm();
  }

  async onSubmit({ value, valid }: NgForm) {
    if (valid) {
      await this.customerService.add(value);
      this.routerService.navigate(['/customers']);
    }
  }

  constructor(
    private customerService: CustomersService,
    private routerService: Router
  ) {}

  ngOnInit(): void {}
}
