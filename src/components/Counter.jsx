import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count+1);
    }

     const subtract = () => {
        setCount(count-1);
    }

     const double = () => {
        setCount(count * 2);
    }

    return (
        <div>
            <h1>Counter : {count}</h1> 
            <button onClick={add}>ADD</button>
            <div></div>
            <button onClick={subtract}>SUBTRACT</button>
            <div></div>
            <button onClick={double}>DOUBLE</button>
        </div>
    )
}

export default Counter;