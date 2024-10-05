const baseURL = process.env.REACT_APP_API_URL;

const apiConfig = {
  baseUrl: `${baseURL}/api`,
  imageURL: (imgPath: string) => `${baseURL}/image/${imgPath}`,
};

export default apiConfig;
