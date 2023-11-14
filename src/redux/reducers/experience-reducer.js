import {
  ADD_EXPERIENCE,
  EXPERIENCES_LIST,
  GET_EXPERIENCE,
  MODIFY_EXPERIENCE,
} from "../actions";

const initialState = {
  experiences_list: [],
  current_experience: null,
};

export default function experiencesReducer(state = initialState, action) {
  switch (action.type) {
    case EXPERIENCES_LIST:
      return {
        ...state,
        experiences_list: action.payload,
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
