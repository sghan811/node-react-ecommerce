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
    PRODUCT_DELETE_REQUEST2,
    PRODUCT_DELETE_SUCCESS2,
    PRODUCT_DELETE_FAIL2,
    PRODUCT_REVIEW_SAVE_SUCCESS2,
    PRODUCT_REVIEW_SAVE_REQUEST2,
    PRODUCT_REVIEW_SAVE_FAIL2,
    PRODUCT_REVIEW_SAVE_RESET2,
  } from '../constants/productConstants2';
  
  function productListReducer2(state = { products2: [] }, action) {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST2:
        return { loading: true, products2: [] };
      case PRODUCT_LIST_SUCCESS2:
        return { loading: false, products2: action.payload };
      case PRODUCT_LIST_FAIL2:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function productDetailsReducer2(state = { product2: { reviews: [] } }, action) {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST2:
        return { loading: true };
      case PRODUCT_DETAILS_SUCCESS2:
        return { loading: false, product2: action.payload };
      case PRODUCT_DETAILS_FAIL2:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function productDeleteReducer2(state = { product2: {} }, action) {
    switch (action.type) {
      case PRODUCT_DELETE_REQUEST2:
        return { loading: true };
      case PRODUCT_DELETE_SUCCESS2:
        return { loading: false, product2: action.payload, success: true };
      case PRODUCT_DELETE_FAIL2:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function productSaveReducer2(state = { product2: {} }, action) {
    switch (action.type) {
      case PRODUCT_SAVE_REQUEST2:
        return { loading: true };
      case PRODUCT_SAVE_SUCCESS2:
        return { loading: false, success: true, product2: action.payload };
      case PRODUCT_SAVE_FAIL2:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function productReviewSaveReducer2(state = {}, action) {
    switch (action.type) {
      case PRODUCT_REVIEW_SAVE_REQUEST2:
        return { loading: true };
      case PRODUCT_REVIEW_SAVE_SUCCESS2:
        return { loading: false, review: action.payload, success: true };
      case PRODUCT_REVIEW_SAVE_FAIL2:
        return { loading: false, errror: action.payload };
      case PRODUCT_REVIEW_SAVE_RESET2:
        return {};
      default:
        return state;
    }
  }
  
  export {
    productListReducer2,
    productDetailsReducer2,
    productSaveReducer2,
    productDeleteReducer2,
    productReviewSaveReducer2,
  };
  