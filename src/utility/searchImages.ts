import axios from "axios";

const searchImages = async (query: string) => {
  try {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_API_KEY}&query=${query}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default searchImages;