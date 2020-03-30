const initialState = {
  displayedPractician: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SINGLE_PRACTICIAN":
      return { ...state, displayedPractician: payload };
    default:
      return state;
  }
};
