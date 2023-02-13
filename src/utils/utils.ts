import { MockFields } from '../static/mock/mockTypes';
import { mockData } from '../static/mock/mockData';

const makeRequest = async (
  link: string,
  options?: RequestInit,
  useMock?: MockFields
): Promise<any> => {
  if (useMock) {
    return options?.body ? mockData[useMock](options.body) : mockData[useMock];
  }

  const response = await fetch(link, options);
  if (response.ok) {
    return response.json();
  }
  return makeRequest(link, options);
};

export default makeRequest;
