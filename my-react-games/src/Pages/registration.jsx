import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Registration() {
    
    const [newUsername, setNewUsername] = useState("");
    const [newUserPassword, setNewUserPassword] = useState("");
    const [userList, setUserList] = useState([]);
    //const [list, setList] = useState([]);
    
    

    localStorage.setItem("user", JSON.stringify(userList));

    /*useEffect(() => {
        setList([localStorage.getItem("key")]);
    }, []);*/

    const addUser = () => {
        
        //setList((l) => [...l, localStorage.getItem("key")]);
        //JSON.parse(localStorage.getItem('user'));

        const newUser = {
            username: newUsername,
            userPassword: newUserPassword,
        };

        //detta är för att uppdatera userList med newUser. Detta istället för .push() pga React
        setUserList(l => ([...l ,newUser]));
        
        console.log(newUser);
        localStorage.setItem("user", JSON.stringify(userList));
        setNewUsername("");
        setNewUserPassword("");
    };

    return (
        <div>
            <h2>Register for access to lots of fun games!</h2>
            <p>OBS! Detta är inte en riktig inloggningssida, det är en övning i lokalt lagrande av data och jag kan se dina sparade data. </p>
            <p>Så, använd INTE ett lösenord som du har någon annanstans också. </p>
            
            <input type="text" minLength={1} value={newUsername} placeholder="Choose your username" 
            onChange={(e) => setNewUsername(e.target.value)}/>
            <input type="text" minLength={1} value={newUserPassword} placeholder="Choose your password" 
            onChange={(e) => setNewUserPassword(e.target.value)}/>
            <button onClick={addUser}>Register Account</button>
            <button><Link to='/login'>Log In</Link></button>
        </div>
    );
};

export default Registration;

/*
Tänkt arbetsgång för registering och login
1. gå igenom lektion om localStorage och klura ut det
2. html för registering och login sida
    fånga input, spara som array av objekt: anv-namn och lösenord
3. Vid registering 
    anv-namn kollas så att det inte redan finns i array (redan registerad användare)
    ev kolla att lösenord uppfyller kriterier, detta kan vänta tills allt annat är klart
    Vid success - till login sida
4. Vid login
    Om inte anv-namn finns så re-direct till registerings-sida
    Matcha båda key-variabler
    Re-direct till simpleFun

5. Hur förhindra att simpleFun kan nås utan att logga in? 

*/