interface IUser {
  id: string;
  name: string;
  score: number;
  previousScore: number | null;
}

interface IUserList {
  userList: IUser[];
}

type IUserPayload = Omit<IUser, 'previousScore'>;

export type { IUser, IUserList, IUserPayload };
