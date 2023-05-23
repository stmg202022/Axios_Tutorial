import { useState } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState("random dad joke");

  const fetchDadJoke = async () => {
    try {
      //
      //======================================
      // const resp = await axios(url);
      // console.log(resp);
      //
      //=======================================
      // const resp = await axios(url, {
      //   headers: {
      //     Accept: "application/json",
      //   },
      // });
      // console.log(resp);
      //
      //===============================================
      const { data } = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      // console.log(data.joke);
      setJoke(data.joke);
      //
    } catch (error) {}
  };

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchDadJoke}>
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};
export default Headers;
