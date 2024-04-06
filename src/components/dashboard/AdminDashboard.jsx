import React from "react";
import Select from 'react-select';
import { useState, useEffect } from "react";

function AdminDashboard() {
    // states
    const [trainers, setTrainers] = useState([]);  // dynamically fetched
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [capacity, setCapacity] = useState(1);
    const [location, setLocation] = useState("");

    const fetchTrainers = async () => {
        try {
            const response = await fetch('http://localhost:3001/trainer', {
                method: 'GET',
                headers: {
                    //'Authorization' : token,
                    'Content-type' : 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Http error status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            const trainerOptions = data.map(trainer => ({
                value: trainer.user_id,
                label: trainer.first_name,
            }));
            setTrainers(trainerOptions);
        } catch (error) {
            console.log('There was an error while fetching trainers');
        }
    }

    useEffect(() =>{
        // TODO: code to run on component load
        console.log('Component was mounted');
       fetchTrainers();
        console.log('trainer name were added');
    }, []);

    const handleButtonClick = async () => {
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

    const handleTrainerChange = (selectOptions) => {
        setSelectedTrainer(selectOptions);
        console.log(`Selected: ${selectOptions.label}`);
    };

    return (
        <div>
            <h1>My admin dashboard</h1>
            <button onClick={handleButtonClick}>Get all members</button>
            <h2>Schedule</h2>
            <form>
                <div>
                    <h3>trainer</h3>
                </div>
                <Select
                    value={selectedTrainer}
                    onChange={handleTrainerChange}
                    options={trainers}
                />
                <div>
                    <h3>start time</h3>
                </div>
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />
                <div>
                    <h3>end time</h3>
                </div>
                <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />
                <div>
                    <h3>capacity</h3>
                </div>
                <input
                    type="number"
                    min="1" // Ensure the capacity is at least one
                    step="1" // int values only
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                />
                <div>
                    <h3>location</h3>
                </div>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </form>
        </div>
    );
}

export default AdminDashboard