const initialState = {
  profiles: [
    {
      id: 1,
      name: 'GD',
      age: 34,
      info: '같은 하늘 다른 곳 너와나... 위험하니까',
    },
    {
      id: 2,
      name: 'YJ',
      age: 23,
      info: '날 가둔 혼란 속 난 누군지',
    },
    {
      id: 3,
      name: 'KMJ',
      age: 22,
      info: '머릿속에 넌 절대 지워지지가 않아 도대체',
    },
    {
      id: 4,
      name: 'LM',
      age: 26,
      info: '비가오는 날엔... 난 항상 널 그리워 해',
    },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROFILE':
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      };
    case 'DELETE_PROFILE':
      return {
        ...state,
        profiles: state.profiles.filter(
          (profile) => profile.id !== action.payload
        ),
      };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        profiles: state.profiles.map((profile) =>
          profile.id === action.payload.id ? action.payload : profile
        ),
      };
    default:
      return state;
  }
};

export default profileReducer;
