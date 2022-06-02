import { createSlice } from '@reduxjs/toolkit';

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: [],
  reducers: {
    createPost(state, action) {
      console.log(state, action);
    },
    updatePost(state, action) {
      console.log(state, action);
    },
    deletePost(state, action) {
      console.log(state, action);
    }
  }
});

const { actions, reducer } = leaderboardSlice;
export const { createPost, updatePost, deletePost } = actions;
export default reducer;
