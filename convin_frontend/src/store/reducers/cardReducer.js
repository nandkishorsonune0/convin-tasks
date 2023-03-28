import { ADD_CARD, DELETE_CARD, UPDATE_CARD, MOVE_CARD } from "../Actions/types.js";

const initialState = [];

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    case DELETE_CARD:
      return state.filter((card) => card.id !== action.payload);
    case UPDATE_CARD:
      return state.map((card) =>
        card.id === action.payload.id ? { ...card, ...action.payload } : card
      );
    case MOVE_CARD:
      const { cardId, sourceBucketId, destinationBucketId } = action.payload;
      const updatedCards = state.map((card) =>
        card.id === cardId ? { ...card, bucketId: destinationBucketId } : card
      );
      return updatedCards;
    default:
      return state;
  }
};

export default cardReducer;
