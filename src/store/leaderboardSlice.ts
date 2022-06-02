import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserList } from '../types/userTypes';

const initialState: IUserList = {
  userList: [
    { id: nanoid(), nickname: 'Bill', score: 10 },
    { id: nanoid(), nickname: 'Ben', score: 7 },
    { id: nanoid(), nickname: 'Anthony', score: 13 },
    { id: nanoid(), nickname: 'Jessica', score: 4 }
  ]
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    AddUser(state, action: PayloadAction<IUser>) {
      const { nickname } = action.payload;
      const { score } = action.payload;
      state.userList.push({ id: nanoid(), nickname, score });
    },
    EditUser(state, action: PayloadAction<IUser>) {
      const selectedUser = state.userList.filter((user: IUser) => user.id === action.payload.id)[0];
      selectedUser.nickname = action.payload.nickname;
      selectedUser.score = action.payload.score;
    }
  }
});

const { actions } = leaderboardSlice;
export const { AddUser, EditUser } = actions;
export default leaderboardSlice;
