import React, { useState } from 'react';

function NotificationForm() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/send_notification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`Notification sent: ${data.message}`);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send notification');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Message:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Send Notification</button>
    </form>
  );
}

export default NotificationForm;
