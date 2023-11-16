import { ALL_PROFILES } from "../actions";

const initialstate = {
  profile: [],
  profileResult: [],
};

export default function visitedProfile(state = initialstate, action) {
  switch (action.type) {
    case ALL_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      };
    default:
      return state;
  }
}
