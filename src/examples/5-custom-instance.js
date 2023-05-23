import { useEffect } from "react";

//This import is for AXIOS_CUSTOM_INSTANCE
import authFetch from "../axios/custom";
import axios from "axios";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  //
  const fetchData = async () => {
    // console.log("custom axios instance");

    try {
      const res1 = await authFetch("/react-store-products");
      const res2 = await axios(randomUserUrl);
      console.log(res1);
      console.log(res2);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
