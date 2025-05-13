import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Login() {
    const users = JSON.parse(localStorage.getItem('user'));

    const [loginUsername, setLoginUsername] = useState("");
    const [loginUserPassword, setLoginUserPassword] = useState("");
    const [userList, setUserList] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState(users);

    const verifyUser = () => {

        const loginUser = {
            username: loginUsername,
            userPassword: loginUserPassword,
        };

        /*const handleFilter = (event) => {
        const value = event.target.value;
        const filtered = users.filter(user => user.username.includes(value));
        setFilteredUsers(filtered);
        };*/
        //setLoginUsername("");
        //setLoginUserPassword("");
        
        if ((users.filter(user => user.username.includes(loginUsername))) 
            && (users.filter(user => user.userPassword.includes(loginUserPassword)))) {
            return (
            <button><Link to='/simplefun'>Simple Fun!</Link></button>);
        } else {
            return (
            <h3>Wrong username and/or password</h3>)
        };

        /*<input type="text" onChange={handleFilter} />
        {filteredUsers.map(user => (
        <div key={user.name}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>
        ))};*/
    };

    return (
        <div>
            <h2>Log in to your account for access to lots of fun games!</h2>
            <input type="text" minLength={1} value={loginUsername} placeholder="your username" 
            onChange={(e) => setLoginUsername(e.target.value)}/>
            <input type="text" minLength={1} value={loginUserPassword} placeholder="your password" 
            onChange={(e) => setLoginUserPassword(e.target.value)}/>
            <button onClick={verifyUser}>Log In</button>
        </div>
    );

};

export default Login;