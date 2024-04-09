import React from "react";
import { useState, useEffect } from "react";
import { Calendar } from "../../components";


import "./dashboard.css";

const memberDashboard = () => {

    return (
        <div>
            <div className="classes">
                <h1>Classes</h1>

                <div className="scheduling">
                  <Calendar></Calendar>
                </div>
            </div>

            <div className="routine">
                <h1>Routines</h1>
                Routines displayed here
            </div>

            <div className="stats">

            </div>
        </div>
    );
}

export default memberDashboard