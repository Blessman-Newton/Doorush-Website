import React, { useState } from 'react';
import { ENDPOINT } from '../constants/data';

export const WaitlistForm = ({
  source = 'hero',
  defaultRole = 'customer',
  hasRoleSelect = false,
  selectedType = '',
  btnText = 'Join the waitlist',
  style = {},
  msgStyle = {}
}) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(defaultRole);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmed)) {
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    if (!ENDPOINT) {
      setStatusMessage('Preview only: the waitlist form is not connected yet.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('Joining...');

    try {
      const payload = {
        email: trimmed,
        role: role || defaultRole,
        source: source,
        type: selectedType || ''
      };

      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatusMessage('You’re on the list. We’ll be in touch soon.');
      setEmail('');
    } catch (err) {
      setStatusMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className="wl" data-src={source} onSubmit={handleSubmit} style={style} noValidate>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
          required
        />
        {hasRoleSelect ? (
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            aria-label="I am a"
          >
            <option value="customer">I’m a customer</option>
            <option value="merchant">I’m a merchant</option>
            <option value="rider">I’m a rider</option>
          </select>
        ) : (
          <input type="hidden" name="role" value={defaultRole} />
        )}
        <input type="hidden" name="type" value={selectedType} />
        <button className="btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Joining...' : btnText}
        </button>
      </form>
      <div className="msg" role="status" style={msgStyle}>
        {statusMessage}
      </div>
    </>
  );
};
