import React, { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <div className="contact-list">
      <table>
        <thead>
          <tr className="contact-list-header">
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {contacts.map((contact) => (
            <ContactRow
              className="contact-item"
              key={contact.id}
              contact={contact}
              setSelectedContactId={setSelectedContactId}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}