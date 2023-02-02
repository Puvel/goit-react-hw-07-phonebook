import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from 'redax/operations';
import css from './contactForm.module.css';

export const ContactForm = ({ contacts = [] }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = e => {
    const setState = { name: setName, phone: setPhone };
    setState[e.target.name](e.target.value);
  };

  const contactsVerification = () => {
    if (contacts.length) {
      return contacts.some(contact => contact.name === name);
    }
  };

  const submitForm = e => {
    e.preventDefault();
    if (contactsVerification()) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, phone }));
      setName('');
      setPhone('');
    }
  };

  return (
    <form className={css.contactForm} onSubmit={submitForm}>
      <label className={css.contactFormLabel}>
        Name
        <input
          className={css.contactFormInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={css.contactFormLabel}>
        Number
        <input
          className={css.contactFormInput}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
        />
      </label>
      <button className={css.contactFormBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array,
};
