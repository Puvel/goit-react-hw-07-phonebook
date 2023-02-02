import PropTypes from 'prop-types';
import { ContactsItem } from 'components/contactsItem/ContactsItem';
import css from './contactsList.module.css';

export const ContactsList = ({ contacts, removeContact }) =>
  contacts.length ? (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <ContactsItem
          key={contact.id}
          {...contact}
          removeContact={removeContact}
        />
      ))}
    </ul>
  ) : (
    <h3 className={css.placeholderTitle}>Add your first contact!</h3>
  );

ContactsList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
