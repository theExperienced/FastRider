export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CHOSEN_RIDE':
      return { ...state, chosenRide: action.payload };
    case 'SET_IS_ACCEPTING':
      return { ...state, isAccepting: action.payload };
    case 'SET_RIDES':
      return { ...state, rides: action.payload };
    default:
      return state;
  }
};

export const initialState = {
  rides: [],
  chosenRide: null,
  isAccepting: true,
};
