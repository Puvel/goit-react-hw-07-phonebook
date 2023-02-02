import PropTypes from 'prop-types';
import css from './contactsItem.module.css';

export const ContactsItem = ({ id, name, phone, removeContact }) => (
  <li className={css.contactsItem}>
    <p className={css.contactText}>
      {name}:{phone}
    </p>
    <button
      className={css.contactsItemBtn}
      id={id}
      onClick={() => removeContact(id)}
    >
      Delete
    </button>
  </li>
);

ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};
