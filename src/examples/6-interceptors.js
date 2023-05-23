import { useEffect } from "react";

//This import is for AXIOS_INTERCEPTOR
import authFetch from "../axios/interceptors";

// const url = "https://course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    // console.log("axios interceptors");

    try {
      // const res = await authFetch("/react-store-productss"); //Send by wrong url to Practise the error catch the error
      const res = await authFetch("/react-store-products");

      console.log(res);
      //
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
