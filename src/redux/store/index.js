import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile-reducer";
import experiencesReducer from "../reducers/experience-reducer";
import jobsReducer from "../reducers/job-search";

const bigReducer = combineReducers({
  profile: profileReducer,
  experience: experiencesReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
