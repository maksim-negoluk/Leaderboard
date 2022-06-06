import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserHistory, IUserPayload } from '../types/userTypes';
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

const initialState: IUserHistory = {
  currentUserList: [],
  userHistory: [],
  currentHistoryIndex: 0
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    EditUser(state, action: PayloadAction<IUserPayload>) {
      const selectedUser = state.currentUserList.filter(
        (user: IUser) => user.id === action.payload.id
      )[0];
      selectedUser.name = action.payload.name;
      selectedUser.previousScore = selectedUser.score;
      selectedUser.score = action.payload.score;
    },
    UpdateHistory(state) {
      state.userHistory.unshift({ userList: state.currentUserList });
      state.currentHistoryIndex = 0;
      state.currentUserList = state.userHistory[state.currentHistoryIndex].userList;
    },
    NavigateForwardInHistory(state) {
      if (state.currentHistoryIndex < state.userHistory.length - 1) {
        state.currentHistoryIndex += 1;
        state.currentUserList = state.userHistory[state.currentHistoryIndex].userList;
      }
    },
    NavigateBackwardInHistory(state) {
      if (state.currentHistoryIndex > 0) {
        state.currentHistoryIndex -= 1;
        state.currentUserList = state.userHistory[state.currentHistoryIndex].userList;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialState.fulfilled, (state, action) => {
      state.currentUserList = action.payload.map((user) => {
        if ('score' in user) return { ...user, id: nanoid(), previousScore: null } as IUser;
        return { ...user, score: 0, id: nanoid(), previousScore: null } as IUser;
      });
      state.userHistory.unshift({ userList: state.currentUserList });
    });
    builder.addCase(fetchUserNickname.fulfilled, (state, action) => {
      const { name } = action.payload;
      const { score } = action.payload;
      const { id } = action.payload;
      const { previousScore } = action.payload;
      state.currentUserList.unshift({
        id,
        name,
        score,
        previousScore
      });
    });
  }
});

const { actions } = leaderboardSlice;
export const { EditUser, UpdateHistory, NavigateBackwardInHistory, NavigateForwardInHistory } =
  actions;
export { fetchInitialState, fetchUserNickname };
export default leaderboardSlice;
