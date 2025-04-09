import React from 'react';

function Modal({ item, closeModal }) {
  if (!item) return null;

  return (
    <div className="modal" style={{ display: 'block' }}>
      <span className="close" onClick={closeModal}>&times;</span>
      <img className="modal-content" src={item.src} alt={item.title} />
    </div>
  );
}

export default Modal;
