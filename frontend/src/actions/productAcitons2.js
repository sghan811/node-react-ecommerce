import {
    PRODUCT_LIST_REQUEST2,
    PRODUCT_LIST_SUCCESS2,
    PRODUCT_LIST_FAIL2,
    PRODUCT_DETAILS_REQUEST2,
    PRODUCT_DETAILS_SUCCESS2,
    PRODUCT_DETAILS_FAIL2,
    PRODUCT_SAVE_REQUEST2,
    PRODUCT_SAVE_SUCCESS2,
    PRODUCT_SAVE_FAIL2,
    PRODUCT_DELETE_SUCCESS2,
    PRODUCT_DELETE_FAIL2,
    PRODUCT_DELETE_REQUEST2,
    PRODUCT_REVIEW_SAVE_REQUEST2,
    PRODUCT_REVIEW_SAVE_FAIL2,
    PRODUCT_REVIEW_SAVE_SUCCESS2,
  } from '../constants/productConstants2';
  import axios from 'axios';
  import Axios from 'axios';
  
  const listProducts2 = (
    category = '',
    searchKeyword = '',
    sortOrder = ''
  ) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST2 });
      const { data } = await axios.get(
        '/api/products2?category=' +
          category +
          '&searchKeyword=' +
          searchKeyword +
          '&sortOrder=' +
          sortOrder
      );
      dispatch({ type: PRODUCT_LIST_SUCCESS2, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_LIST_FAIL2, payload: error.message });
    }
  };
  
  const saveProduct2 = (product2) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_SAVE_REQUEST2, payload: product2 });
      const {
        userSignin: { userInfo },
      } = getState();
      if (!product2._id) {
        const { data } = await Axios.post('/api/products2', product2, {
          headers: {
            Authorization: 'Bearer ' + userInfo.token,
          },
        });
        dispatch({ type: PRODUCT_SAVE_SUCCESS2, payload: data });
      } else {
        const { data } = await Axios.put(
          '/api/products2/' + product2._id,
          product2,
          {
            headers: {
              Authorization: 'Bearer ' + userInfo.token,
            },
          }
        );
        dispatch({ type: PRODUCT_SAVE_SUCCESS2, payload: data });
      }
    } catch (error) {
      dispatch({ type: PRODUCT_SAVE_FAIL2, payload: error.message });
    }
  };
  
  const detailsProduct2 = (productId) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST2, payload: productId });
      const { data } = await axios.get('/api/products2/' + productId);
      dispatch({ type: PRODUCT_DETAILS_SUCCESS2, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_DETAILS_FAIL2, payload: error.message });
    }
  };
  
  const deleteProduct2 = (productId) => async (dispatch, getState) => {
    try {
      const {
        userSignin: { userInfo },
      } = getState();
      dispatch({ type: PRODUCT_DELETE_REQUEST2, payload: productId });
      const { data } = await axios.delete('/api/products2/' + productId, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      });
      dispatch({ type: PRODUCT_DELETE_SUCCESS2, payload: data, success: true });
    } catch (error) {
      dispatch({ type: PRODUCT_DELETE_FAIL2, payload: error.message });
    }
  };
  
  const saveProductReview2 = (productId, review) => async (dispatch, getState) => {
    try {
      const {
        userSignin: {
          userInfo: { token },
        },
      } = getState();
      dispatch({ type: PRODUCT_REVIEW_SAVE_REQUEST2, payload: review });
      const { data } = await axios.post(
        `/api/products2/${productId}/reviews2`,
        review,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      dispatch({ type: PRODUCT_REVIEW_SAVE_SUCCESS2, payload: data });
    } catch (error) {
      // report error
      dispatch({ type: PRODUCT_REVIEW_SAVE_FAIL2, payload: error.message });
    }
  };
  
  export {
    listProducts2,
    detailsProduct2,
    saveProduct2,
    deleteProduct2,
    saveProductReview2,
  };
  