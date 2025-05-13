/*local Storage
browser storage inside localhost / live server
localStorage.setItem('key', 'value') = set value in local storage
localStorage.getItem('key') = get value from local storage 
localStorage.removeItem('key') = remove value from local storage
localStorage.clear() = clear all values from local storage


*/
import React from "react";
import { useState, useEffect } from "react";

const LocalStorageExercise = () => {
    const [userName, setUserName] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        setList([localStorage.getItem("key")]);
    }, []);

    const addUserName = () => {
        localStorage.setItem("key", userName);
        setList((l) => [...l, localStorage.getItem("key")]);
        setUserName("");
    };

    const removeUserName = () => {
        localStorage.removeItem("key");
    };

    return (
        <div>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <button onClick={addUserName}>Choose your username</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={removeUserName}>Remove username</button>
        </div>
    );

};

export default LocalStorageExercise;