interface IUser {
  id: string;
  name: string;
  score: number;
  previousScore: number | null;
}

interface IFetchedUser {
  name: string;
  score?: number;
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

export type { IUser, IUserList, IConfiguration, IUserPayload, IFetchedUser };
