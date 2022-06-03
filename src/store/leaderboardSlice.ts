import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserList, IUserPayload } from '../types/userTypes';
import { makeRequest } from '../utils/utils';

const fetchInitialState = createAsyncThunk('leaderboard/fetchInitialState', async () =>
  makeRequest('http://coding-test.cube19.io/frontend/v1/starting-state')
);

const initialState: IUserList = {
  userList: []
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    AddUser(state, action: PayloadAction<IUserPayload>) {
      const { name } = action.payload;
      const { score } = action.payload;
      state.userList.push({ id: nanoid(), name, score, previousScore: null });
    },
    EditUser(state, action: PayloadAction<IUserPayload>) {
      const selectedUser = state.userList.filter((user: IUser) => user.id === action.payload.id)[0];
      selectedUser.name = action.payload.name;
      selectedUser.previousScore = selectedUser.score;
      selectedUser.score = action.payload.score;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialState.fulfilled, (state, action) => {
      state.userList = action.payload.map((user) => {
        if ('score' in user) return { ...user, id: nanoid(), previousScore: null } as IUser;
        return { ...user, score: 0, id: nanoid(), previousScore: null } as IUser;
      });
    });
  }
});

const { actions } = leaderboardSlice;
export const { AddUser, EditUser } = actions;
export { fetchInitialState };
export default leaderboardSlice;
