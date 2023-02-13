import { MockFields } from './mockTypes';

const mockData: Record<MockFields, any> = {
  initialUsers: [
    {
      name: 'Idan',
      score: 5
    },
    {
      name: 'Mike',
      score: 3
    },
    {
      name: 'Steve',
      score: 4
    },
    {
      name: 'Alex',
      score: 9
    },
    {
      name: 'John',
      score: 1
    },
    {
      name: 'Terry',
      score: 0
    },
    {
      name: 'Angela',
      score: 8
    },
    {
      name: 'Vadim',
      score: 7
    },
    {
      name: 'Maxim',
      score: 10
    },
    {
      name: 'Andriy',
      score: 1
    }
  ],
  userName(username: string): Record<'display-name', string> {
    // capitalize first letter
    const newUsername: string = JSON.parse(username).username.replace(/\b\w/g, (l: string) =>
      l.toUpperCase()
    );
    return {
      'display-name': newUsername
    };
  }
};

// eslint-disable-next-line import/prefer-default-export
export { mockData };
