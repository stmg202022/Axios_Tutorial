import { useEffect } from "react";
import axios from "axios";
const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

// axios.defaults.headers.common["Accept"] = "application/json"

const GlobalInstance = () => {
  const fetchData = async () => {
    // console.log("global axios instance");

    try {
      const res1 = await axios(productsUrl);
      const res2 = await axios(randomUserUrl);
      console.log(res1);
      // console.log(res2);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;
