const initialState = {
  displayedPractician: null,
  list: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SINGLE_PRACTICIAN":
      return { ...state, displayedPractician: payload };
    case "FETCH_PRACTICIANS":
      return { ...state, list: payload.rows };
    case "UPDATE_PRESENTATION":
      return {
        ...state,
        displayedPractician: {
          ...state.displayedPractician,
          presentation: payload.presentation,
        },
      };
    default:
      return state;
  }
};
