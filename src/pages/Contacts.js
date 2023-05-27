import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import MyLoader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';

const styles = {
  title: {
    color: '#fff3cc',
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  subtitle: {
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
};

export default function Contacts() {
  const { isLoading, error } = useSelector(state => state.contacts);
  return (
    <>
      <h1 style={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 style={styles.subtitle}>Contacts</h2>
      <Filter />
      {isLoading && <MyLoader />}
      {error && <h2>An error: {error}</h2>}
      <ContactList />
    </>
  );
}
