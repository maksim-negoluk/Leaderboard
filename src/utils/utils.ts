const makeRequest = async (link: string, options?: RequestInit): Promise<any> => {
  const response = await fetch(link, options);
  if (response.ok) {
    return response.json();
  }
  return makeRequest(link, options);
};

export default makeRequest;
