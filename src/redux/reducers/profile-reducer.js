import {
  ALL_PROFILES,
  MY_PROFILE,
  UPDATE_PROFILE,
  USER_PROFILE,
  VISIT_USER,
} from "../actions";

const initialState = {
  profiles: [],
  my_profile: {},
  current_user_profile: {},
  recently_visited: [],
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
        current_user_profile: action.payload,
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

    case VISIT_USER:
      console.log("dentro il reducer");
      let to_insert = true;
      let userToInsert = null;
      state.recently_visited.forEach((element) => {
        if (action.payload === element._id) {
          to_insert = false;
        }
      });
      if (to_insert) {
        state.profiles.forEach((user) => {
          if (user._id === action.payload) {
            userToInsert = user;
          }
        });
        if (userToInsert !== null) {
          return {
            ...state,
            recently_visited: [...state.recently_visited, userToInsert],
          };
        } else {
          return state;
        }
      } else {
        return state;
      }

    default:
      return state;
  }
}
