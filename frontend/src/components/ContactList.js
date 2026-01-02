import React from 'react';
import axios from 'axios';
import './ContactList.css';

const ContactList = ({ contacts, loading, onContactDeleted }) => {
  const API_URL = process.env.REACT_APP_API_URL || 'https://contactapi.rohitcodes.tech/api/contacts';

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        onContactDeleted(id);
      } catch (error) {
        console.error('Error deleting contact:', error);
        alert('Failed to delete contact. Please try again.');
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="contact-list-container">
        <h2>Contacts</h2>
        <div className="loading">Loading contacts...</div>
      </div>
    );
  }

  return (
    <div className="contact-list-container">
      <h2>Contacts ({contacts.length})</h2>
      
      {contacts.length === 0 ? (
        <div className="empty-state">
          <p>No contacts yet. Add your first contact above!</p>
        </div>
      ) : (
        <div className="contacts-table">
          <div className="table-header">
            <div className="col-name">Name</div>
            <div className="col-email">Email</div>
            <div className="col-phone">Phone</div>
            <div className="col-message">Message</div>
            <div className="col-date">Created</div>
            <div className="col-actions">Actions</div>
          </div>
          
          <div className="table-body">
            {contacts.map((contact) => (
              <div key={contact._id} className="table-row">
                <div className="col-name">
                  <strong>{contact.name}</strong>
                </div>
                <div className="col-email">
                  {contact.email || <span className="no-data">—</span>}
                </div>
                <div className="col-phone">{contact.phone}</div>
                <div className="col-message">
                  {contact.message || <span className="no-data">—</span>}
                </div>
                <div className="col-date">{formatDate(contact.createdAt)}</div>
                <div className="col-actions">
                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="delete-btn"
                    title="Delete contact"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;

