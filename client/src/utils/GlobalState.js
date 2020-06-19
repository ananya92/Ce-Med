import React, { createContext, useReducer, useContext } from "react";
const CeMedContext = createContext();
const { Provider } = CeMedContext;

// reducer function to handle the updation of state based on the action type
const reducer = (state, action) => {
    switch (action.type) {
        case "initNewRecord":
            console.log(action.data);
            return { ...state, currentRecord: action.data.newRecordInfo, pageName: action.data.pageName, isRecordChanged: action.data.isRecordChanged }
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
};

const CeMedContextProvider = ({ value = {}, ...props }) => {
    // Creating global store using useReducer hook. 
    const [state, dispatch] = useReducer(reducer, { currentRecord: value, pageName: "", isRecordChanged: false });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useCeMedContext = () => {
    return useContext(CeMedContext);
};

export { CeMedContextProvider, useCeMedContext };
