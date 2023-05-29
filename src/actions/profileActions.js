export const addProfile = (profile) => {
  return {
    type: 'ADD_PROFILE',
    payload: profile,
  };
};

export const deleteProfile = (id) => {
  return {
    type: 'DELETE_PROFILE',
    payload: id,
  };
};

export const updateProfile = (profile) => {
  return {
    type: 'UPDATE_PROFILE',
    payload: profile,
  };
};
