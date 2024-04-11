import React from "react";
import Select from 'react-select';
import { useState, useEffect } from "react";
import "./dashboard.css";

function AdminDashboard() {
    // timeslot states
    const [trainers, setTrainers] = useState([]);  // dynamically fetched
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [capacity, setCapacity] = useState(1);
    const [location, setLocation] = useState("");
    // equipment states
    const [equipment, setEquipment] = useState([]);
    // billing information states
    const [member, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);
    const [periodicity, setPeriodicity] = useState("");
    const [cardType, setCardType] = useState("");
    const [cardHolder, setCardHolder] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");

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
                label: `${trainer.first_name} ${trainer.last_name}`,
            }));
            setTrainers(trainerOptions);
        } catch (error) {
            console.log('There was an error while fetching trainers');
        }
    }

    const fetchEquipment = async () => {
        try {
            const response = await fetch('http://localhost:3001/equipment', {
                method: 'GET',
                headers: {
                    //'Authorization' : token,
                    'content-type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Http error status: ' + response.status);
            }

            const data = await response.json();
            const equipments = data.map(equipment => ({
                equipment_id: equipment.equipment_id,
                equipment_name: equipment.equipment_name,
                last_maintained: equipment.last_maintained,
                next_maintained: equipment.next_maintained,
            }));
            setEquipment(equipments)
        } catch (error) {
            console.log('There was an error while fetching equipment');
        }
    }
 
    const fetchMembers = async ()=> {
        try {
            // get jwt token from localStorage
            const token = localStorage.getItem("token");

            const response = await fetch('http://localhost:3001/member', {
                method: 'GET',
                headers: {
                    'Authorization' : token,
                    'content-type' : 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Http error status: ' + response.status);
            }

            const data = await response.json();
            const memberOptions = data.map(member =>({
                value: member.user_id,
                label: `${member.first_name} ${member.last_name}`,
            }));
            setMembers(memberOptions);
        } catch (error) {
            console.log('There was an error while fetching members');
        }
    }

    useEffect(() =>{
        // TODO: code to run on component load
        console.log('Component was mounted');
       fetchTrainers();
       fetchMembers();
       fetchEquipment();
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

    const handleMemberChange = (selectOptions) => {
        setSelectedMember(selectOptions);
    }

    const handleNewTimeSlot = async (event) => {
        event.preventDefault();
        // console.log(selectedTrainer.value);
        try {
            if (!date || !startTime || !endTime || !selectedTrainer) {
                console.error('Date, start time, end time, and trainer are required');
                return;
            }
            // combine date and time
            const startDateTime = `${date} ${startTime}:00`;
            const endDateTime = `${date} ${endTime}:00`;

            console.log('StartTime', startDateTime);

            const response = await fetch('http://localhost:3001/timeslots/add', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    trainer: selectedTrainer.value,
                    startTime: startDateTime,
                    endTime: endDateTime,
                    capacity,
                    location
                })
            });

            if(!response.ok) {
                throw new Error(`Http error status: ${response.status}`);
            }
        } catch (error) {
            console.error('There was an issue add new timeslot');
        }
    };

    const handleBillingInfo = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch('http://localhost:3001/member/billing/add', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                userId: selectedMember.value,
                periodicity: periodicity,
                cardType: cardType,
                cardHolder: cardHolder,
                cardNumber: cardNumber,
                expiry: expiry,
            })
        });

        if (!response.ok) {
            throw new Error(`Http error status: ${response.status}`);
        }
      } catch (error) {
        console.error('There was an issue adding billing');
      }
    };

    const handlePayment = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/member/payment/add', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                }
            });
        } catch (error) {
            console.error('There was an issue adding payment');
        }
    }

    const startTimeInput = document.getElementById("startTimeInput");
    const previousStartValue = startTime;
    if (startTimeInput != null){
        startTimeInput.onchange = () => {
            if (startTime < startTimeInput.min) {
              console.log("Invalid Time!")
                setStartTime(previousStartValue);
            }
          }  
    }

    const endTimeInput = document.getElementById("endTimeInput");
    const previousEndValue = endTime;
    if (endTimeInput != null){
        endTimeInput.onchange = () => {
            if (startTime < startTimeInput.min || endTime > endTimeInput.max) {
              console.log("Invalid Time!")
                setEndTime(previousEndValue);
            }
          }  
    }

    return (
        <div>
            <h1 style={{marginBottom: '20px'}}>My admin dashboard</h1>
            <h2>Add Class to Schedule</h2>
            <form onSubmit={handleNewTimeSlot}>
                <div>
                    <h3>trainer</h3>
                </div>
                <Select
                    value={selectedTrainer}
                    onChange={handleTrainerChange}
                    options={trainers}
                />
                <div>
                    <h3>date</h3>
                </div>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <div>
                    <h3>start time</h3>
                </div>
                <input
                    type="time"
                    id="startTimeInput"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)} 
                    // TODO: change this to selectedTrainers availability
                    min="08:00" 
                required/>
                <div>
                    <h3>end time</h3>
                </div>
                <input
                    type="time"
                    id="endTimeInput"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    min={startTime}

                    // TODO: change this to selectedTrainers availability
                    max="22:00" 
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
                <br></br>
                <br></br>
                <button type={"submit"}>Create</button>
            </form>
            <h2>Equipment Maintenance</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last Maintenance</th>
                    <th>Next Maintenance</th>
                </tr>
                </thead>
                <tbody>
                {equipment.map((item) => (
                    <tr key={item.equipment_id}>
                        <td>{item.equipment_id}</td>
                        <td>{item.equipment_name}</td>
                        <td>{item.last_maintained}</td>
                        <td>{item.next_maintained}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <h2>Class Schedule Updating</h2>
            <h2>Add billing information</h2>
            <form onSubmit={handleBillingInfo}>
                <h3>member</h3>
                <Select
                    value={selectedMember}
                    onChange={handleMemberChange}
                    options={member}
                />
                <h3>periodicity</h3>
                <select
                    value={periodicity}
                    onChange={(e) => setPeriodicity(e.target.value)}
                >
                    <option value="">Select a Periodicity</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
                <h3>card type</h3>
                <select
                    value={cardType}
                    onChange={(e) => setCardType(e.target.value)}
                >
                    <option value="">Select card type</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="visa">Visa</option>
                    <option value="paypal">Paypal</option>
                </select>
                <h3>card holder name</h3>
                <input
                    type="text"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                />
                <h3>card number</h3>
                <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                />
                <h3>expiry</h3>
                <input
                    type="date"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                />
                <br></br>
                <br></br>
                <button type={"submit"}>Add billing information</button>
            </form>
            <h2>Add Payment</h2>
            <form onSubmit={handlePayment}>
                <h3>Member</h3>
                <Select
                    value={selectedMember}
                    onChange={handleMemberChange}
                    options={member}
                />
                <h3>Amount</h3>
                <input
                    type="number"
                    min="1" // Ensure the capacity is at least one
                    step="0.01" // int values only
                />
                <h3>Time slot</h3>
                <input
                    type="number"
                    min="1" // Ensure the capacity is at least one
                    step="1" // int values only
                    //value={capacity}
                    //onChange={(e) => setCapacity(e.target.value)}
                />
                <br></br>
                <br></br>
                <button type={"submit"}>complete payment</button>
            </form>
        </div>
    );
}

export default AdminDashboard
