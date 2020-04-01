const initialState = {
  auth: "",
  createdUser: "",
  username: "",
  userID: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "JWT":
      return {
        ...state,
        auth: payload.jwt,
        username: payload.username,
        userId: payload.userId
      };
    case "NEW_USER":
      return { ...state, createdUser: payload };
    default:
      return state;
  }
};
