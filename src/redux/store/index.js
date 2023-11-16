import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile-reducer";
import experiencesReducer from "../reducers/experience-reducer";
import jobsReducer from "../reducers/job-search";
import visitedProfile from "../reducers/search-profile";

const bigReducer = combineReducers({
  profile: profileReducer,
  experience: experiencesReducer,
  jobs: jobsReducer,
  profileVisit: visitedProfile,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
