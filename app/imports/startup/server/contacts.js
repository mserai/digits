import { contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactsSeeds = [
  {
    first: 'Mike',
    last: 'Serai',
    address: '98-112 Kaulike Dr.',
    telephone: '808-226-0450',
    email: 'mserai@hawaii.edu',
    favorite: true,
  },
  {
    first: 'Steffany',
    last: 'Shibata',
    address: '98-112 Kaulike Dr.',
    telephone: '808-269-8676',
    email: 'shibata2@hawaii.edu',
    favorite: true,
  },
  {
    first: 'Jody',
    last: 'Serai',
    address: '98-112 Kaulike Dr.',
    telephone: '808-206-2707',
    email: 'jserai@gmail.com',
    favorite: true,
  },
  {
    first: 'Luke',
    last: 'Skywalker',
    address: '0504 NotTatooine.',
    telephone: '808-123-4567',
    email: 'lonely@jedi.edu',
    favorite: true,
  },
  {
    first: 'Tom',
    last: 'Chandler',
    address: '1817 Ship Dr.',
    telephone: '808-050-1475',
    email: 'lastship@usnavy.gov',
    favorite: true,
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (contacts.find().count() === 0) {
  _.each(contactsSeeds, function seedContacts(stuff) {
    contacts.insert(stuff);
  });
}
