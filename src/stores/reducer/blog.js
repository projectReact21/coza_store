import ActionTypes from "../action";

const initialState = {
  blogs: [],
  blog: {},
};
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_BLOG:
      return {
        ...state,
        blogs: action.blogs,
      };
    case ActionTypes.BLOG:
      return {
        ...state,
        blog: action.blog,
      };
    default:
      return state;
  }
};
export default blogReducer;
