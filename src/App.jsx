import { useState } from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import MyContext from "./Context/MyContext";

function App() {

  const [data,setData] = useState(0)
  const sharedState = {data, setData}

  return (
    <>
      <MyContext.Provider value={sharedState}>
        <Component1 />
        <Component2 />
      </MyContext.Provider>
    </>
  );
}

export default App;
