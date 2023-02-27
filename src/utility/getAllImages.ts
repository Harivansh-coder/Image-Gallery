import axios from "axios";

const getALLImages = async () => {
    try {
        const res = await axios.get(
          `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_API_KEY}&count=10`
        );
        return res.data;
      } catch (err) {
        console.log(err);
        return [];
      }    
}

export default getALLImages;