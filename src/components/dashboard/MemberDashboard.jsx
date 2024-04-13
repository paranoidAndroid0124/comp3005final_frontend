import React from "react";
import { useState, useEffect } from "react";
import { Calendar, Routines } from "../../components";


import "./dashboard.css";

const memberDashboard = () => {

    return (
        <div>
            <div className="classes">
                <h1>Member Classes</h1>

                <div className="scheduling">
                  <Calendar></Calendar>
                </div>
            </div>

            <div className="routine">
                <h1>Current Routine</h1>
                <Routines></Routines>
            </div>

            <div className="stats">

            </div>
        </div>
    );
}

export default memberDashboard