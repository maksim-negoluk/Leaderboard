interface IFetchedUser {
  name: string;
  score?: number;
}

interface IFetchedUserNickname {
  'display-name': string;
}

export type { IFetchedUser, IFetchedUserNickname };
