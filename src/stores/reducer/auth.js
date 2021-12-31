import ActionTypes from "../action";

const initialState = {
  isLogin: JSON.parse(localStorage.getItem("isLoggedIn")) || false,

  token: localStorage.getItem("token"),
  // isLogin: false,
  // dataUser: [],
  dataUser: JSON.parse(localStorage.getItem("data")) || [],
  currentLocation: "",
  allproducts: [],
  productFill: [],
  allmycarts: [],
  productHome: [],
  page: 0,
  perpage: 10,
  selectedHome: "seller",
  selectedShop: "allproducts",
  selectedFillShop: "",
  isFill: false,

  isCanvasFavorite: false,
  isCanvasCart: false,
  isShowCanvasFavorite: false,
  isShowCanvasCart: false,
  // new
  changeStatus: false,
  typeFill: 0,
  sorfBy: "",
  price: 0,
  color: "",
  taps: "",
  //
  dataCheckOut: JSON.parse(localStorage.getItem("datacheckout")) || [],
  dataUserCheckOut: JSON.parse(localStorage.getItem("datausercheckout")) || {},
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case ActionTypes.DATA_USER_CHECK_OUT:
      localStorage.setItem(
        "datausercheckout",
        JSON.stringify(action.dataUserCheckOut)
      );
      return {
        ...state,
        dataUserCheckOut: action.dataUserCheckOut,
      };
    case ActionTypes.DATA_CHECKOUT:
      localStorage.setItem("datacheckout", JSON.stringify(action.dataCheckOut));
      return {
        ...state,
        dataCheckOut: action.dataCheckOut,
      };
    //
    //new
    case ActionTypes.CHANGE_STATUS:
      return {
        ...state,
        changeStatus: !state.changeStatus,
      };
    case ActionTypes.SELECTED_FILTER_SHOP:
      return {
        ...state,
        typeFill: action.typeFill,
        selectedFillShop: action.selectedFillShop,
      };

    //
    case ActionTypes.SET_PERPAGE:
      return {
        ...state,
        perpage: action.perpage,
      };
    case ActionTypes.CURRENT_LOACION:
      return {
        ...state,
        currentLocation: action.currentLocation ? action.currentLocation : "/",
      };
    case ActionTypes.LOGIN:
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("token", action.token);
      localStorage.setItem("data", JSON.stringify(action.dataUser));
      return {
        ...state,
        isLogin: true,
        token: action.token,
        dataUser: action.dataUser,
      };
    case ActionTypes.LOGOUT:
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("token");
      localStorage.removeItem("data");
      return {
        ...state,
        isLogin: false,
        token: "",
        dataUser: [],
      };
    case ActionTypes.LOAD_DATA:
      return {
        ...state,
        allproducts: action.allproducts,
      };
    case ActionTypes.FIND_DATA:
      return {
        ...state,
        isFill: true,
        productFill: action.productFill,
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
    case ActionTypes.LOAD_MY_CARTS:
      return {
        ...state,
        allmycarts: action.allmycarts,
      };
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        allmycarts: state.allmycarts.map((mycart) =>
          mycart.name === action.payload.name
            ? {
                ...mycart,
                quantity: mycart.quantity + 1,
                total: (mycart.quantity + 1) * mycart.price,
              }
            : mycart
        ),
        allproducts: state.allproducts.map((product) =>
          product.id === action.payload.id
            ? { ...product, totalquantitys: product.totalquantitys - 1 }
            : product
        ),
      };
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        allproducts: state.allproducts.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                totalquantitys:
                  product.totalquantitys + action.payload.quantity,
              }
            : product
        ),
      };
    case ActionTypes.CLEAR_CART:
      break;
    default:
      return { ...state };
  }
};
export default authReducer;
