import {
  DELETE_POST,
  GET_POST,
  MODIFY_POST,
  NEW_POST,
  POST_LIST,
} from "../actions";

const initialState = {
  posts: [],
  current_post: {},
};

export default function experiencesReducer(state = initialState, action) {
  switch (action) {
    case POST_LIST:
      return {
        ...state,
        posts: action.payload,
      };
    case NEW_POST:
      return {
        ...state,
      };
    case GET_POST:
      return {
        ...state,
        current_post: action.payload,
      };
    case MODIFY_POST:
      return {
        ...state,
        current_post: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
      };
    default:
      return state;
  }
}
