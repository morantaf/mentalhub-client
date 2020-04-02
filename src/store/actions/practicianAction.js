import request from "superagent";

const baseUrl = "http://localhost:4000";

export const singlePractician = payload => ({
  type: "SINGLE_PRACTICIAN",
  payload
});

export const createPractician = data => async (dispatch, getState) => {
  try {
    const state = getState();
    const createdPractician = await request
      .post(`${baseUrl}/practicians`)
      .set("Authorization", `Bearer ${state.user.auth}`)
      .send(data);
    console.log(createdPractician.body);
  } catch (error) {
    console.error(error);
  }
};
