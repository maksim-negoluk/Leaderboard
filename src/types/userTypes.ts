interface IUser {
  id: string;
  nickname: string;
  score: number;
  previousScore: number | null;
}

interface IUserList {
  userList: IUser[];
}

interface IConfiguration {
  modalConfiguration: IModalConfiguration;
}

interface IModalConfiguration {
  showModal: boolean;
  currentUserId?: string;
}

type IUserPayload = Omit<IUser, 'previousScore'>;

export type { IUser, IUserList, IConfiguration, IUserPayload };
