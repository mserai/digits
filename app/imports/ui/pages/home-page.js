import { Template } from 'meteor/templating';
import { contacts } from '../../api/contacts/contacts.js';

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the contacts documents.
   */
  contactsList() {
    return contacts.find();
  },
});

Template.Home_Page.onCreated(function onCreated() {
  this.subscribe('contacts');
});

