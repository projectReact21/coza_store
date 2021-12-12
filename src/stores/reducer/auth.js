import ActionTypes from "../action";

const initialState = {
  allproducts: [],
  productFill: [],
  productLike: [],
  allmycarts: [],
  isFill: false,
  isCanvasFavorite: false,
  isCanvasCart: false,
  isShowCanvasFavorite: false,
  isShowCanvasCart: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_DATA:
      return {
        ...state,
        allproducts: action.allproducts,
        productFill: action.allproducts,
      };
    case ActionTypes.FIND_DATA:
      return {
        ...state,
        isFill: true,
        productFill: action.productFill,
      };
    case ActionTypes.FIND_LIKE_DATA:
      return {
        ...state,
        productLike: action.productLike,
      };
    case ActionTypes.SHOW_CANVAS_FAVORITE:
      return {
        ...state,
        isShowCanvasFavorite: true,
      };
    case ActionTypes.HIDEN_CANVAS_FAVORITE:
      return {
        ...state,
        isShowCanvasFavorite: false,
      };
    case ActionTypes.SHOW_CANVAS_CART:
      return {
        ...state,
        isShowCanvasCart: true,
      };
    case ActionTypes.HIDEN_CANVAS_CART:
      return {
        ...state,
        isShowCanvasCart: false,
      };
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,

        allproducts: state.allproducts.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    default:
      return { ...state };
  }
};
export default authReducer;
