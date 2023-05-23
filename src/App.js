import Title from "./components/Title";
// import FirstReq from "./examples/1-first-request";
// import SecondReq from "./examples/2-headers";
// import PostReq from "./examples/3-post-request";
import GlobalInstance from "./examples/4-global-instance";
import "./axios/global";

function App() {
  return (
    <main>
      <Title />
      {/* <FirstReq /> */}
      {/* <SecondReq /> */}
      {/* <PostReq /> */}
      <GlobalInstance />
    </main>
  );
}

export default App;
