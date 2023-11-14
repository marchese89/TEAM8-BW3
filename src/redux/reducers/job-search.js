import {
  JOBS_LIST,
  SEARCH_BY_CATEGORY,
  SEARCH_BY_COMPANY,
  SEARCH_BY_QUERY,
} from "../actions";

const initialState = {
  jobs: [],
  job_search: [],
};

export default function experiencesReducer(state = initialState, action) {
  switch (action.type) {
    case JOBS_LIST:
      return {
        ...state,
        jobs: action.payload,
      };
    case SEARCH_BY_QUERY:
      return {
        ...state,
        job_search: action.payload,
      };
    case SEARCH_BY_COMPANY:
      return {
        ...state,
        job_search: action.payload,
      };
    case SEARCH_BY_CATEGORY:
      return {
        ...state,
        job_search: action.payload,
      };
    default:
      return state;
  }
}
