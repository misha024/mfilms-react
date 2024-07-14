import {createContext, useContext, useState} from "react";


const RequestCounterContext = createContext();

export const useRequestCounter = () => {
    return useContext(RequestCounterContext);
};

export const RequestCounterProvider = ({ children }) => {
    const [requestCounter, setRequestCounter] = useState(0);

    const incrementCounter = () => {
        setRequestCounter(prevCounter => prevCounter + 1);
    };

    return (
        <RequestCounterContext.Provider value={{ requestCounter, incrementCounter }}>
            {children}
        </RequestCounterContext.Provider>
    );
};