import React from 'react';
import { List, Avatar, Modal } from 'antd';
import CardModal from './CardModal';

const CardList = ({ cards, onMoveCard, onDeleteCard }) => {
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCardModalClose = () => {
    setSelectedCard(null);
  };

  const handleCardMove = (card, destinationBucket) => {
    onMoveCard(card, destinationBucket);
  };

  const handleCardDelete = (card) => {
    onDeleteCard(card);
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={cards}
      renderItem={(card) => (
        <List.Item
          actions={[
            <a key="move" onClick={() => handleCardMove(card)}>
              move
            </a>,
            <a key="delete" onClick={() => handleCardDelete(card)}>
              delete
            </a>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar icon={<i className="fa fa-file-text" />} />}
            title={<a onClick={() => handleCardClick(card)}>{card.name}</a>}
          />
        </List.Item>
      )}
    >
      <Modal
        visible={!!selectedCard}
        onCancel={handleCardModalClose}
        footer={null}
      >
        {selectedCard && (
          <CardModal card={selectedCard} onClose={handleCardModalClose} />
        )}
      </Modal>
    </List>
  );
};

export default CardList;
