import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_SAVE_REQUEST,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_SAVE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_REVIEW_SAVE_SUCCESS,
  PRODUCT_REVIEW_SAVE_REQUEST,
  PRODUCT_REVIEW_SAVE_FAIL,
  PRODUCT_REVIEW_SAVE_RESET,
} from '../constants/productConstants';
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
  PRODUCT_REVIEW_SAVE_RESET2,
} from '../constants/productConstants2';

function productListReducer(state = { products: [] }, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productDetailsReducer(state = { product: { reviews: [] }, product2: {reviews2: []} }, action) {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload , product2: action.payload};
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productDeleteReducer(state = { product: {} }, action) {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, product: action.payload, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productSaveReducer(state = { product: {} }, action) {
  switch (action.type) {
    case PRODUCT_SAVE_REQUEST:
      return { loading: true };
    case PRODUCT_SAVE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_SAVE_FAIL:
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

function productReviewSaveReducer(state = {}, action) {
  switch (action.type) {
    case PRODUCT_REVIEW_SAVE_REQUEST:
      return { loading: true };
    case PRODUCT_REVIEW_SAVE_SUCCESS:
      return { loading: false, reviews: action.payload, success: true };
    case PRODUCT_REVIEW_SAVE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_REVIEW_SAVE_RESET:
      return {};
    default:
      return state;
  }
}

function productReviewSaveReducer2(state = {}, action) {
  switch (action.type) {
    case PRODUCT_REVIEW_SAVE_REQUEST2:
      return { loading: true };
    case PRODUCT_REVIEW_SAVE_SUCCESS2:
      return { loading: false, reviews2: action.payload, success: true };
    case PRODUCT_REVIEW_SAVE_FAIL2:
      return { loading: false, error: action.payload };
    case PRODUCT_REVIEW_SAVE_RESET2:
      return {};
    default:
      return state;
  }
}


export {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
  productDeleteReducer,
  productReviewSaveReducer,
  productSaveReducer2,
  productReviewSaveReducer2,
};
