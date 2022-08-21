import { Injectable } from '@angular/core';
import { Contact } from '../shared/interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private _contacts: Contact[] = [
    {
      id: '62a6f35ab3a347a579c3f3e4',
      name: 'Melba Gilliam',
      email: 'melbagilliam@vantage.com',
      birthday: new Date('2018-07-02'),
      phones: [],
    },
    {
      id: '62a6f35aed78978e672b01a5',
      name: 'Vaughan Benson',
      email: 'vaughanbenson@vantage.com',
      birthday: new Date('2014-11-18'),
      phones: ['+1 (828) 508-2706', '+972 (844) 594-3498'],
    },
    {
      id: '62a6f35afecfbeeeb056545a',
      name: 'Tate Hodge',
      email: 'tatehodge@vantage.com',
      birthday: new Date('2017-12-25'),
      phones: ['+1 (916) 557-3253'],
    },
    {
      id: '62a6f35acad66cf756ec3988',
      name: 'Gates Guerra',
      email: 'gatesguerra@vantage.com',
      birthday: new Date('2015-02-05'),
      phones: ['+1 (807) 428-2974', '+972 (959) 578-3406'],
    },
    {
      id: '62a6f35ade0a8dc872a487a6',
      name: 'Lina Shelton',
      email: 'linashelton@vantage.com',
      birthday: new Date('2014-05-25'),
      phones: ['+1 (893) 479-2612', '+972 (849) 507-3961'],
    },
  ];

  getAll(): Contact[] {
    return this._contacts;
  }

  constructor() {}
}
