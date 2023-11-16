import { EXPERIENCES_LIST, GET_EXPERIENCE } from "../actions";

const initialState = {
  experiences_list: [],
  current_experience: [],
};

export default function experiencesReducer(state = initialState, action) {
  switch (action.type) {
    case EXPERIENCES_LIST:
      return {
        ...state,
        experiences_list: action.payload,
        current_experience: action.payload,
      };

    case GET_EXPERIENCE:
      return {
        ...state,
        current_experience: action.payload,
      };

    default:
      return state;
  }
}
