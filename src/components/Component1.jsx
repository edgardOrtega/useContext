import { useContext } from "react";
import MyContext from "../Context/MyContext";

const Component1 = () => {
  const { data, setData } = useContext(MyContext);

  return (
    <>
      <button onClick={(e) => setData(data + 1)}> + </button>
    </>
  );
};

export default Component1;
