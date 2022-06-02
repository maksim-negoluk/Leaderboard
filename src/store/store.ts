import { combineReducers, configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from './leaderboardSlice';
import configurationSlice from './configurationSlice';

const rootReducer = combineReducers({
  leaderboard: leaderboardReducer.reducer,
  configuration: configurationSlice.reducer
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
