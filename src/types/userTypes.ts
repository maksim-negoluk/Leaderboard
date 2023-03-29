interface IUser {
  id: string;
  name: string;
  avatar: string;
  score: number;
  previousScore: number | null;
}

interface IUserList {
  userList: IUser[];
}

interface IUserHistory {
  currentUserList: IUser[];
  userHistory: IUserList[];
  currentHistoryIndex: number;
}

type IUserPayload = Omit<IUser, 'previousScore'>;

type IUserData = Omit<IUserPayload, 'avatar'>

export type { IUser, IUserList, IUserPayload, IUserHistory, IUserData };
