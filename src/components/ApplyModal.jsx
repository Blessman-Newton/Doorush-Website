import React, { useEffect, useRef } from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE } from '../constants/data';

export const ApplyModal = ({ isOpen, jobTitle, onClose }) => {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      if (closeBtnRef.current) {
        closeBtnRef.current.focus();
      }

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="md"
      id="md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mdt"
      onClick={(e) => {
        if (e.target.id === 'md') {
          onClose();
        }
      }}
    >
      <div className="mx">
        <button
          className="x"
          id="mdx"
          type="button"
          aria-label="Close"
          ref={closeBtnRef}
          onClick={onClose}
        >
          ×
        </button>
        <h3 id="mdt">Apply: {jobTitle}</h3>
        <p>Send your CV and a short note to:</p>
        <p className="mv" id="mde">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <p>Or call us on:</p>
        <p className="mv" id="mdp">
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>{CONTACT_PHONE}</a>
        </p>
      </div>
    </div>
  );
};
