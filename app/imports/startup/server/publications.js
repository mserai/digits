import { contacts } from '../../api/contacts/contacts.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('contacts', function publishcontactsData() {
  return contacts.find();
});
