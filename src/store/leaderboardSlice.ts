import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserList, IUserPayload } from '../types/userTypes';
import { IFetchedUserNickname } from '../types/fetchTypes';
import makeRequest from '../utils/utils';

const getInitialStateURL = 'http://coding-test.cube19.io/frontend/v1/starting-state';
const getUserNicknameURL = 'http://coding-test.cube19.io/frontend/v1/process-user';

const fetchInitialState = createAsyncThunk(
  'leaderboard/fetchInitialState',
  async (): Promise<IUser[]> => makeRequest(getInitialStateURL)
);

const fetchUserNickname = createAsyncThunk(
  'leaderboard/fetchUserNickname',
  async (user: IUserPayload): Promise<IUser> => {
    const response: IFetchedUserNickname = await makeRequest(getUserNicknameURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: `${user.name}` })
    });
    return {
      id: user.id,
      name: response['display-name'],
      score: user.score,
      previousScore: null
    };
  }
);

const initialState: IUserList = {
  userList: []
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
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
    builder.addCase(fetchUserNickname.fulfilled, (state, action) => {
      const { name } = action.payload;
      const { score } = action.payload;
      const { id } = action.payload;
      const { previousScore } = action.payload;
      state.userList.push({ id, name, score, previousScore });
    });
  }
});

const { actions } = leaderboardSlice;
export const { EditUser } = actions;
export { fetchInitialState, fetchUserNickname };
export default leaderboardSlice;
