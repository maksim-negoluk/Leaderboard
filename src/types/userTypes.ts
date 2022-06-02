interface User {
  nickname: string;
  score: number;
}

interface UserList {
  userList: User[];
}

export type { User, UserList };
