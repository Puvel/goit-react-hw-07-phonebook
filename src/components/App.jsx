import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Section } from 'components/section/Section';
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactsList } from 'components/contactsList/ContactsList';
import { Filter } from 'components/filter/Filter';
import { setFilter } from 'redax/slices';
import { fetchContacts, deleteContact } from 'redax/operations';

export const App = () => {
  const dispatch = useDispatch();
  const {
    contacts: { items },
    filter,
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterInput = e => dispatch(setFilter(e.target.value));

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const contactsFilter = () => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm contacts={items} />
      </Section>
      <Section title="Contacts">
        {!!items.length && <Filter filter={filter} filterInput={filterInput} />}
        <ContactsList
          removeContact={removeContact}
          contacts={contactsFilter()}
        />
      </Section>
    </>
  );
};
