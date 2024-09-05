import MyContext from "../Context/MyContext";
import { useContext } from "react";


const Component2 = () => {
    const {data,setData} = useContext(MyContext)
    return (
        <>
        {data}
        <button onClick={(e) => setData(data - 1)}> - </button>
        </>

    );
}

export default Component2