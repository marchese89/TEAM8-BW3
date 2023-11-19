import { POST_LIST } from "../actions";

const initialState = {
  all_posts: [],
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case POST_LIST:
      return {
        ...state,
        all_posts: action.payload,
      };

    default:
      return state;
  }
}
