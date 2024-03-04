import { PEXELS_API_KEY } from "./constants";
import axios from "axios";

export const fetchImagesFromPexels = async () => {
  const NATURE_IMAGES_API_URL =
    "https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&page=1&per_page=20";

  const response = await axios.get(NATURE_IMAGES_API_URL, {
    headers: {
      Authorization: PEXELS_API_KEY,
    },
  });

  return response?.data?.photos;
};
