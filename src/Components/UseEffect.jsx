import "./App.css";
import React, {useEffect, useState} from "react";

const DataFetch = () => {
    const [data, setData] = useState([])

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            console.log("data",data)
        })
    }, [])

    return (
        <div>
            <h1>
                NAME: {data[0]?.name}
            </h1>
            <h1>
                NAME: {data[1]?.name}
            </h1>
            <h1>Name: {data[2]?.name}</h1>
        </div>
    )
}

export default DataFetch;