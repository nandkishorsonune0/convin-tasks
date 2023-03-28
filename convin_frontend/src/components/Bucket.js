import React, { useState } from 'react';
import { Input } from 'antd';
import CardList from './CardList';

const Bucket = ({ bucket, cards, onAddCard, onMoveCard, onDeleteCard }) => {
  const [newCard, setNewCard] = useState('');

  const handleAddCard = () => {
    if (newCard !== '') {
      onAddCard(bucket, newCard);
      setNewCard('');
    }
  };

  const handleMoveCard = (card, destinationBucket) => {
    onMoveCard(bucket, card, destinationBucket);
  };

  const handleDeleteCard = (card) => {
    onDeleteCard(bucket, card);
  };

  return (
    <div className="bucket">
      <h2>{bucket}</h2>
      <Input
        placeholder="New card name"
        value={newCard}
        onChange={(e) => setNewCard(e.target.value)}
        onPressEnter={handleAddCard}
      />
      <CardList
        cards={cards}
        onMoveCard={handleMoveCard}
        onDeleteCard={handleDeleteCard}
      />
    </div>
  );
};

export default Bucket;
