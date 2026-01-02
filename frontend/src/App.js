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
      const response = await fetch('http://localhost:5000/api/contacts');
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

