import React from "react";
import { useState, useEffect } from "react";

function AdminDashboard() {
    useEffect(() =>{
        // TODO: code to run on component load
        console.log('Component was mounted')

        //
    }, []);

    const handlebuttonClick = async () => {
        // get jwt token from localStorage
        const token = localStorage.getItem("token");

        console.log(token);

        const response = await fetch('http://localhost:3001/member', {
           method: 'GET',
           headers: {
               'Authorization':  token,
               'Content-Type': 'application/json'
           }
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <div>
            <h1>My admin dashboard</h1>
            <button onClick={handlebuttonClick}>Get all members</button>
        </div>
    );
}

export default AdminDashboard