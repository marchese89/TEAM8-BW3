import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile-reducer";
import experiencesReducer from "../reducers/experience-reducer";

const bigReducer = combineReducers({
  profile: profileReducer,
  experience: experiencesReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
