import { useEffect, useState } from "react";
import axios from "axios";
// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const [products, setProducts] = useState("");
  const FetchData = async () => {
    try {
      //
      const res = await axios.get(url);
      // console.log(typeof res, res);
      // console.log(typeof res.data, res.data);
      // console.log(JSON.stringify(res.data, null, 2));
      // const data = res.data;
      const { data } = res;

      setProducts(JSON.stringify(data));
      //
    } catch (error) {
      //
      console.log(error.response);
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.statusText);
      // console.log(error.response.data.msg);

      //
    }
  };
  useEffect(() => {
    FetchData();

    console.log("first axios request");
  }, []);

  return (
    <div>
      <h2 className="text-center">first request</h2>
      <p>{products}</p>
    </div>
  );
};
export default FirstRequest;
