import { useState } from "react";
export default function Counter(){
    const [count,setCount] = useState(0);
    const [value,setValue] = useState("type here!");
    return (<>
    <input type="text"
        value={value}
        onChange={(e) => {setValue(e.target.value)}}
    />
    <h3>You type {value.length}</h3>
    <button onClick={()=> setCount(count+1)}>Clicke me!</button>
    <button onClick={()=> setCount(0)}>reset</button>
    <p>You clicked {count} time</p>
    </>);
}