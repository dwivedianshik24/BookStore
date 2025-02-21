import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log('Form Data:', formData);
  };

  // Inline CSS styles with animations for color and text
  const formStyle = {
    padding: '20px',
    maxWidth: '500px',
    margin: '0 auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };

  const messageStyle = {
    backgroundColor: '#dff0d8', // Initial light green background
    padding: '20px',
    borderRadius: '8px',
    animation: 'colorChange 2s ease-in-out', // Apply the color transition
  };

  const thankYouTextStyle = {
    animation: 'fadeInText 3s ease-out', // Fade-in text animation
    color: '#2e7d32', // Dark green text color
  };

  const getBackTextStyle = {
    animation: 'fadeInText 3s ease-out 1s', // Fade-in with 1s delay
    color: '#388e3c', // Slightly different dark green
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    backgroundColor: 'white',
    border: '2px solid green',
    borderRadius: '4px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  // Keyframe animations as inline styles using React's style attribute
  const styleSheet = {
    '@keyframes colorChange': {
      '0%': {
        backgroundColor: '#dff0d8', // Light green
      },
      '50%': {
        backgroundColor: '#8bc34a', // Darker green
      },
      '100%': {
        backgroundColor: '#4CAF50', // Final dark green
      },
    },
    '@keyframes fadeInText': {
      '0%': {
        opacity: 0,
        transform: 'translateY(20px)', // Start below
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)', // End at normal position
      },
    },
  };

  return (
    <div style={formStyle}>
      <h2>Contact Us - Bookstore</h2>
      {formSubmitted ? (
        <div style={messageStyle}>
          <h3 style={thankYouTextStyle}>Thank you for contacting us!</h3>
          <p style={getBackTextStyle}>We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message"
              rows="5"
              style={inputStyle}
            ></textarea>
          </div>
          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
