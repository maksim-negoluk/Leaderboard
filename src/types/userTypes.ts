interface IUser {
  id: string;
  name: string;
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

export type { IUser, IUserList, IUserPayload, IUserHistory };
