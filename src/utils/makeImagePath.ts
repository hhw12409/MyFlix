const BASE_URL = 'https://image.tmdb.org/t/p';

const makeImagePath = (id: string, format?: string) => {
  return `${BASE_URL}/${format ? format : 'original'}/${id}`;
};

export default makeImagePath;
