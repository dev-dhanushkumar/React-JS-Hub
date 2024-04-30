/* eslint-disable react/prop-types */
import {useEffect} from "react";
import './App.css'
function User(props) {
    useEffect(() => {
        console.log("useEffect is Calling!");
    },[props.data,props.count])

    return(
        <div className="App">
            <h1>Data: {props.data}</h1>
            <h1>Count: {props.count}</h1>
        </div>
    )
}

export default User;