export const CREATE_CARD = 'CREATE_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const MOVE_CARD = 'MOVE_CARD';
export const PLAY_HISTORY = 'PLAY_HISTORY';

export const createCard = (bucketId, card) => {
  return (dispatch) => {
    dispatch({ type: CREATE_CARD, bucketId, card });
  };
};

export const deleteCard = (bucketId, cardId) => {
  return (dispatch) => {
    dispatch({ type: DELETE_CARD, bucketId, cardId });
  };
};

export const editCard = (bucketId, cardId, newName, newLink) => {
  return (dispatch) => {
    dispatch({ type: EDIT_CARD, bucketId, cardId, newName, newLink });
  };
};

export const moveCard = (oldBucketId, newBucketId, cardId) => {
  return (dispatch) => {
    dispatch({ type: MOVE_CARD, oldBucketId, newBucketId, cardId });
  };
};

export const playHistory = (card) => {
  return (dispatch) => {
    dispatch({ type: PLAY_HISTORY, card });
  };
};
