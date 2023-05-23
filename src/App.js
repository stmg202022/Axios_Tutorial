import Title from "./components/Title";
// import FirstReq from "./examples/1-first-request";
// import SecondReq from "./examples/2-headers";
// import PostReq from "./examples/3-post-request";
// import GlobalInstance from "./examples/4-global-instance";
import "./axios/global";
//This import is for AXIOS_GLOBAL_INSTANCE

import CustomInstance from "./examples/5-custom-instance";

function App() {
  return (
    <main>
      <Title />
      {/* <FirstReq /> */}
      {/* <SecondReq /> */}
      {/* <PostReq /> */}
      {/* <GlobalInstance /> */}
      <CustomInstance />
    </main>
  );
}

export default App;
