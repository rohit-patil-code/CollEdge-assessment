import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch contacts on component mount
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const API_URL = process.env.REACT_APP_API_URL || 'https://contactapi.rohitcodes.tech/api/contacts';
      const response = await fetch(API_URL);
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleContactAdded = (newContact) => {
    setContacts([newContact, ...contacts]);
  };

  const handleContactDeleted = (deletedId) => {
    setContacts(contacts.filter(contact => contact._id !== deletedId));
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>Contact Management</h1>
          <p>Manage your contacts efficiently</p>
        </header>

        <ContactForm onContactAdded={handleContactAdded} />

        <ContactList
          contacts={contacts}
          loading={loading}
          onContactDeleted={handleContactDeleted}
        />
      </div>
    </div>
  );
}

export default App;

