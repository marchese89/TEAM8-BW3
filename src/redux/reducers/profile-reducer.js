import {
  ALL_PROFILES,
  MY_PROFILE,
  UPDATE_PROFILE,
  USER_PROFILE,
} from "../actions";

const initialState = {
  profiles: [],
  my_profile: {},
  current_user_profile: {},
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      };
    case MY_PROFILE:
      return {
        ...state,
        my_profile: action.payload,
      };

    case USER_PROFILE:
      return {
        ...state,
        current_user_profile: action.payload,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        my_profile: action.payload,
        current_user_profile: action.payload,
      };
    default:
      return state;
  }
}
