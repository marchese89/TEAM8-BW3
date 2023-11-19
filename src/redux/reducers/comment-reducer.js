import { GET_COMMENTS } from "../actions";

const initialState = {
  all_comments: [],
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        all_comments: action.payload,
      };

    default:
      return state;
  }
}
