import Title from "./components/Title";
// import FirstReq from "./examples/1-first-request";
// import SecondReq from "./examples/2-headers";
// import PostReq from "./examples/3-post-request";

// import GlobalInstance from "./examples/4-global-instance";
//This import is for AXIOS_GLOBAL_INSTANCE
import "./axios/global";

// import CustomInstance from "./examples/5-custom-instance";
import Interceptors from "./examples/6-interceptors";

function App() {
  return (
    <main>
      <Title />
      {/* <FirstReq /> */}
      {/* <SecondReq /> */}
      {/* <PostReq /> */}
      {/* <GlobalInstance /> */}
      {/* <CustomInstance /> */}
      <Interceptors />
    </main>
  );
}

export default App;
