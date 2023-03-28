import React from 'react';

const CardModal = ({ card, onClose }) => {
  const { name, link } = card;

  return (
    <div>
      <h1>{name}</h1>
      <iframe src={link} title={name} width="100%" height="400px" />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CardModal;
