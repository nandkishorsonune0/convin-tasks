import { CREATE_BUCKET, DELETE_BUCKET, EDIT_BUCKET } from '../Actions/bucketActions';

const initState = [
  { id: '1', name: 'Entertainment Videos' },
  { id: '2', name: 'Education Videos' },
  { id: '3', name: 'Sports Videos' }
];

const bucketReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_BUCKET:
      return [...state, { id: new Date().getTime().toString(), name: action.bucket }];
    case DELETE_BUCKET:
      return state.filter((bucket) => bucket.id !== action.bucketId);
    case EDIT_BUCKET:
      return state.map((bucket) => {
        if (bucket.id === action.bucketId) {
          return { ...bucket, name: action.newName };
        } else {
          return bucket;
        }
      });
    default:
      return state;
  }
};

export default bucketReducer;
