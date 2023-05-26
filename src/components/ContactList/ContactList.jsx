import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from '../../store/contacts/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactItem from './ContactItem';
import { fetchContacts } from '../../store/contacts/contactsAPI';

export const ContactList = () => {
  const contactValue = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterValue = useSelector(getFilterValue);

  const visibleContacts = contactValue.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      {contactValue.length > 0 && (
        <ul>
          {visibleContacts.map(({ id, name, phone }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={phone}
            ></ContactItem>
          ))}
        </ul>
      )}
    </div>
  );
};
