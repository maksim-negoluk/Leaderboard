interface IUser {
  id: string;
  nickname: string;
  score: number;
}

interface IUserList {
  userList: IUser[];
}

interface IConfiguration {
  modalConfiguration: IModalConfiguration;
}

interface IModalConfiguration {
  showModal: boolean;
  modalText: string;
  currentUserId?: string;
}

export type { IUser, IUserList, IConfiguration };
