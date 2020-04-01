import request from "superagent";

const baseUrl = "http://localhost:4000";

export const singlePractician = payload => ({
  type: "SINGLE_PRACTICIAN",
  payload
});

export const fetchPractician = id => async (dispatch, getState) => {
  try {
    const practician = await request.get(`${baseUrl}/practicians/${id}`);
    console.log(practician);
  } catch (error) {
    console.error(error);
  }
};
