import React, { useState } from 'react';
import "../scss/ProductPage.scss";
import '../index.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (name && email) {
      alert(`Name: ${name}\nEmail: ${email}`);
    } else {
      alert('Please enter your name and email');
    }
  }

  return (
    <div className="app">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
