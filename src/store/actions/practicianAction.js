import request from "superagent";

// const baseUrl = "http://localhost:4000";
const baseUrl = "https://hidden-falls-55871.herokuapp.com";

export const singlePractician = (payload) => ({
  type: "SINGLE_PRACTICIAN",
  payload,
});

export const createPractician = (data) => async (dispatch, getState) => {
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

export const fetchPracticians = (limit, offset, data) => async (
  dispatch,
  getState
) => {
  try {
    let practicians = data
      ? await request.get(
          `${baseUrl}/practicians?limit=${limit}&offset=${offset}&search=${data}`
        )
      : await request.get(
          `${baseUrl}/practicians?limit=${limit}&offset=${offset}`
        );
    console.log("get practician ?", practicians.body);
    const action = {
      type: "FETCH_PRACTICIANS",
      payload: practicians.body,
    };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
