import React, { useReducer, createContext, useContext } from 'react';


const makeStore = (reducer, initialState) => {
    const StateContext = createContext();
    const DispatchContext = createContext();

    const StoreProvider = ({ children }) => {
        const [ state, dispatch ] = useReducer(reducer, initialState);
    
        return (
            <StateContext.Provider value={state}>
                <DispatchContext.Provider value={dispatch}>
                    {children}
                </DispatchContext.Provider>
            </StateContext.Provider>
        )
    }

    const useAppState = () => {
        return useContext(StateContext);
    };
    
    const useAppDispatch = () => {
        return useContext(DispatchContext);
    };

    return {StoreProvider, useAppState, useAppDispatch};
};

export default makeStore;