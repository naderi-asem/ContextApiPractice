import React from "react";
import { useCount, useCountActions } from "../CounterProvider/CounterProvider";


const CountOne = () => {

    const count = useCount();
    const {incrementHandler, decrementHandler, resetHandler} = useCountActions();

    // const incrementHandler = () => {
    //     setCount(count +1);
    // }

    // const decrementHandler = () => {
    //     setCount(count - 1);
    // }

    // const resetHandler = () => {
    //     setCount(0);
    // }
    
    return ( 
        <div>
            <h3>count is: {count} </h3>
            <button onClick={decrementHandler} >decrement</button>
            <button onClick={resetHandler} >reset</button>
            <button onClick={incrementHandler} >increment</button>
        </div>
     );
}
 
export default CountOne;