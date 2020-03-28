import { userContact } from './../contact';
import { Component, OnInit } from '@angular/core';
import { contacts} from '../contacts';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: userContact[];
  newContact: userContact;
  constructor() { }

  ngOnInit() {
    this.contacts = contacts;
  }

  addContact(newContact): void {
    console.log('Add contact has been called');
    // add contact to contacts list
    // clear inputs
    this.contacts.unshift(newContact);
   // this.newContact = {};
    alert('New contact added ;D');
  }
}
