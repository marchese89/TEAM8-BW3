import {
  JOBS_LIST,
  SEARCH_BY_CATEGORY,
  SEARCH_BY_COMPANY,
  SEARCH_BY_QUERY,
} from "../actions";

const initialState = {
  jobs_list: null,
  job_search: null,
};

export default function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case JOBS_LIST:
      return {
        ...state,
        jobs_list: action.payload,
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
