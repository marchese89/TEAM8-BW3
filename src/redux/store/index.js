import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile-reducer";
import experiencesReducer from "../reducers/experience-reducer";
import jobsReducer from "../reducers/job-search";
import commentReducer from "../reducers/comment-reducer";
import postReducer from "../reducers/post-reducer";

const bigReducer = combineReducers({
  profile: profileReducer,
  experience: experiencesReducer,
  jobs: jobsReducer,
  comments: commentReducer,
  posts: postReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
