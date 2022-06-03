import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserList, IUserPayload } from '../types/userTypes';

const initialState: IUserList = {
  userList: [
    { id: nanoid(), nickname: 'Bill', score: 10, previousScore: null },
    { id: nanoid(), nickname: 'Ben', score: 7, previousScore: null },
    { id: nanoid(), nickname: 'Anthony', score: 13, previousScore: null },
    { id: nanoid(), nickname: 'Jessica', score: 4, previousScore: null }
  ]
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    AddUser(state, action: PayloadAction<IUserPayload>) {
      const { nickname } = action.payload;
      const { score } = action.payload;
      state.userList.push({ id: nanoid(), nickname, score, previousScore: null });
    },
    EditUser(state, action: PayloadAction<IUserPayload>) {
      const selectedUser = state.userList.filter((user: IUser) => user.id === action.payload.id)[0];
      selectedUser.nickname = action.payload.nickname;
      selectedUser.previousScore = selectedUser.score;
      selectedUser.score = action.payload.score;
    }
  }
});

const { actions } = leaderboardSlice;
export const { AddUser, EditUser } = actions;
export default leaderboardSlice;
