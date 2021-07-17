import { LIKE_REQUEST } from "../constants/likeConstants";
import Axios from "axios";
const like = (like_res) => async (dispatch, getState) => {
  try {
      const { userSignin: { userInfo } } = getState();
      const { data: { data: like_post } } = await Axios.post("/api/like", like_res, {
        headers: {
          Authorization: ' Bearer ' + userInfo.token
        }
      });
      dispatch({ type: LIKE_REQUEST, payload: like_post });
    } catch (error) {
      return 0;
    }
}

export default like;