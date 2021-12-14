import ActionTypes from "../action";

const initialState = {
  isLogin: false,
  dataUser: [],
  currentLocation: "",
  allproducts: [],
  productFill: [],
  productLike: [],
  allmycarts: [],
  productHome: [],
  selectedHome: "seller",
  selectedShop: "allproducts",
  isFill: false,
  isCanvasFavorite: false,
  isCanvasCart: false,
  isShowCanvasFavorite: false,
  isShowCanvasCart: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CURRENT_LOACION:
      return {
        ...state,
        currentLocation: action.currentLocation ? action.currentLocation : "/",
      };
    case ActionTypes.LOGIN:
      return {
        ...state,
        isLogin: true,
        dataUser: action.dataUser,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isLogin: false,
        dataUser: [],
      };
    case ActionTypes.LOAD_DATA:
      return {
        ...state,
        allproducts: action.allproducts,
        productFill: action.productFill,
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
    case ActionTypes.FIND_DATA_HOME:
      return {
        ...state,
        productHome: action.productHome,
      };
    case ActionTypes.SELECTED_MAIN_HOME:
      return {
        ...state,
        selectedHome: action.selectedHome,
      };
    case ActionTypes.SELECTED_MAIN_SHOP:
      return {
        ...state,
        selectedShop: action.selectedShop,
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
