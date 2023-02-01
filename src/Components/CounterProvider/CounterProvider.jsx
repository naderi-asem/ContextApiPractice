import React from "react";

export const CounterContext = React.createContext();
export const CounterContextDispatcher = React.createContext();

const CounterProvider = ({children}) => {

    const [count, setCount] = React.useState(0);
    
    return ( 
        <CounterContext.Provider value={count} >
            <CounterContextDispatcher.Provider value={setCount} >
                {children}
            </CounterContextDispatcher.Provider>
        </CounterContext.Provider>
     );
}
 
export default CounterProvider;

export const useCount = () => React.useContext(CounterContext);
export const useCountActions = () => {
    const setCount = React.useContext(CounterContextDispatcher);

    const incrementHandler = () => {
        setCount(prevCount => prevCount +1);
    }

    const decrementHandler = () => {
        setCount(prevCount => prevCount - 1);
    }

    const resetHandler = () => {
        setCount(0);
    }

    return {incrementHandler, decrementHandler, resetHandler};
};