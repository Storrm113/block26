import React, { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    }

    fetchContact();
  }, [selectedContactId]);

  if (!contact) {
    return <div>Loading contact...</div>;
  }

  return (
    <div className="selected-contact">
      <h2>Contact Details</h2>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Website:</strong> {contact.website}</p>
      <p><strong>Address:</strong> {`${contact.address.street}, ${contact.address.city}`}</p>
      <button onClick={() => setSelectedContactId(null)}>
        Back to Contact List
      </button>
    </div>
  );
}