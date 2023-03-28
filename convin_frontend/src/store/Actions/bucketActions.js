export const CREATE_BUCKET = 'CREATE_BUCKET';
export const DELETE_BUCKET = 'DELETE_BUCKET';
export const EDIT_BUCKET = 'EDIT_BUCKET';

export const createBucket = (bucket) => {
  return (dispatch) => {
    dispatch({ type: CREATE_BUCKET, bucket });
  };
};

export const deleteBucket = (bucketId) => {
  return (dispatch) => {
    dispatch({ type: DELETE_BUCKET, bucketId });
  };
};

export const editBucket = (bucketId, newName) => {
  return (dispatch) => {
    dispatch({ type: EDIT_BUCKET, bucketId, newName });
  };
};
