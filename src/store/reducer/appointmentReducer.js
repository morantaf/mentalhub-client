const initialState = {
  appointmentPractician: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "PRACTICIAN_APPOINTMENTS":
      return { ...state, appointmentPractician: payload };
    case "APPOINTMENT_CREATED":
      return {
        ...state,
        appointmentPractician: [...state.appointmentPractician, payload]
      };

    default:
      return state;
  }
};
