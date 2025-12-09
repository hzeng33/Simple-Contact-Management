import React from "react";
import "./App.css";

const ContactList = ({ contacts, updateContact, updateCallback }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/delete_contact/${id}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        updateCallback();
      } else {
        console.error("Failed to delete the contact.");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="contact-list">
      <h2>Contacts</h2>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>
                <button onClick={() => updateContact(contact)}>Edit</button>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
