import React from "react";
import Child from "./Child";
const MyContext = React.createContext();

const Parent = () => {
    const contextValue = "Hello My name is Roshan Bhuvad"

    return (
        <MyContext.Provider value={contextValue}>
            <Child context={MyContext} />
        </MyContext.Provider>
    )
};

export default Parent;