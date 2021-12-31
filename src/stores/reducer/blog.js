import ActionTypes from "../action";

const initialState = {
  blogs: [],
  blog: JSON.parse(localStorage.getItem("blog")) || {},
  comments: JSON.parse(localStorage.getItem("comments")) || [],
};
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_BLOG:
      return {
        ...state,
        blogs: action.blogs,
      };
    case ActionTypes.BLOG:
      localStorage.setItem("blog", JSON.stringify(action.blog));
      return {
        ...state,
        blog: action.blog,
      };
    // comment
    case ActionTypes.COMMENTS:
      localStorage.setItem("comments", JSON.stringify(action.comments));
      return {
        ...state,
        comments: action.comments,
      };
    //
    default:
      return state;
  }
};
export default blogReducer;
