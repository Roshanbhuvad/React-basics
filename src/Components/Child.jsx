import React, { useContext } from "react";

const Child = (props) => {
  const contextValue = useContext(props.context);

  return <p>{contextValue}</p>;
};

export default Child;