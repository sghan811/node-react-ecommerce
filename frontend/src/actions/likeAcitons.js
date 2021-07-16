import { LIKE_REQUEST } from "../constants/likeConstants";
const like = (like_res) => async (dispatch, getState) => {
    try {
      const { userSignin: { userInfo } } = getState();
      const { data: { data: like_post } } = await Axios.post("/api/like", like_res, {
        headers: {
          Authorization: ' Bearer ' + userInfo.token
        }
      });
      dispatch({ type: LIKE_REQUEST, payload: like_post })
    } catch (error) {
      dispatch({ type: LIKE_REQUEST, payload: error.message });
    }
}

export default like;