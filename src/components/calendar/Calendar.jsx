import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';
import "./calendar.css"

function Calendar() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalData, setModalData] = useState(null)
  const userId = localStorage.getItem("userId")
  const userRoleId = localStorage.getItem("roleId");

  const [timeSlotData, setTimeSlotData] = useState([{
    slotId: "",
    start: "",
    end: "",
    title: "",
    location: "",
    capacity: "",
    currentCount: "",
    price: "",
  }]);
  let timeSlotOptions;

  // Fetch time slots
  const fetchTimeSlots = async () => {
    try {
      const response = await fetch('http://localhost:3001/timeslots', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Http error status: ${response.status}`);
      }

      // const data = await response.json();

      const data = [
        {
          "slotId": "1",
          "start_time": "2024-04-07T07:00:00",
          "end_time": "2024-04-07T09:00:00",
          "title": "Morning Session",
          "location": "Room 101",
          "capacity": "50",
          "current_enrollment": "0",
          "price": 0
        },
        {
          "slot_id": "2",
          "start_time": "2024-04-07T11:00:00",
          "end_time": "2024-04-07T13:00:00",
          "title": "Midday Session",
          "location": "Room 102",
          "capacity": "60",
          "current_enrollment": "0",
          "price": 10
        },
        {
          "slot_id": "3",
          "start_time": "2024-04-07T15:00:00",
          "end_time": "2024-04-07T17:00:00",
          "title": "Afternoon Session",
          "location": "Room 103",
          "capacity": "70",
          "current_enrollment": "0",
          "price": 15
        },
        {
          "slot_id": "4",
          "start_time": "2024-04-07T19:00:00",
          "end_time": "2024-04-07T21:00:00",
          "title": "Evening Session",
          "location": "Room 104",
          "capacity": "80",
          "current_enrollment": "0",
          "price": 20
        },
        {
          "slot_id": "5",
          "start_time": "2024-04-08T07:00:00",
          "end_time": "2024-04-08T09:00:00",
          "title": "Morning Session",
          "location": "Room 105",
          "capacity": "50",
          "current_enrollment": "0",
          "price": 0
        },
        {
          "slot_id": "6",
          "start_time": "2024-04-08T11:00:00",
          "end_time": "2024-04-08T13:00:00",
          "title": "Midday Session",
          "location": "Room 106",
          "capacity": "60",
          "current_enrollment": "0",
          "price": 10
        },
        {
          "slot_id": "7",
          "start_time": "2024-04-08T15:00:00",
          "end_time": "2024-04-08T17:00:00",
          "title": "Afternoon Session",
          "location": "Room 107",
          "capacity": "70",
          "current_enrollment": "0",
          "price": 15
        },
        {
          "slot_id": "8",
          "start_time": "2024-04-08T19:00:00",
          "end_time": "2024-04-08T21:00:00",
          "title": "Evening Session",
          "location": "Room 108",
          "capacity": "80",
          "current_enrollment": "0",
          "price": 20
        },
        {
          "slot_id": "9",
          "start_time": "2024-04-09T07:00:00",
          "end_time": "2024-04-09T09:00:00",
          "title": "Morning Session",
          "location": "Room 109",
          "capacity": "50",
          "current_enrollment": "0",
          "price": 0
        },
        {
          "slot_id": "10",
          "start_time": "2024-04-09T11:00:00",
          "end_time": "2024-04-09T13:00:00",
          "title": "Midday Session",
          "location": "Room 110",
          "capacity": "60",
          "current_enrollment": "0",
          "price": 10
        }
      ]


      // fetching doesnt store hour and minute data?
      const timeSlotOptions = data.map(timeSlot => ({
        slotId: timeSlot.slot_id,
        start: timeSlot.start_time,
        end: timeSlot.end_time,
        title: timeSlot.title,
        location: timeSlot.room,
        capacity: timeSlot.capacity,
        currentCount: timeSlot.current_enrollment,
        price: timeSlot.price,
      }));

      console.log("timeSlotOptions: ", timeSlotOptions)

      setTimeSlotData(timeSlotOptions);
      console.log(timeSlotData)
    } catch (err) {
      console.log('There was an error while fetching time slot data');
    }
  }

  useEffect(() => {
    fetchTimeSlots();
  }, []);

  // triggers popup to appear
  const handleEventClick = (arg) => {
    setModalIsOpen(true)
    setModalData(arg.event)
  }

  // TODO: make POST request to backend
  const handleRegister = async (slotId) => {
    try {
      await console.log("slotID, userId : ", slotId, userId)
      const response = await fetch("http://localhost:3001/timeslot/register", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          user_id: userId,
          slot_id: slotId
        })
      })



      if (!response.ok) {
        throw new Error(`Http error status: ${response.status} `);
      }

      console.log("Registered!")
    } catch (err) {
      console.log(err);
      alert("Registration failed.")
    }

  }

  // TODO: make POST request to backend
  function handleDeleteClass() {
    console.log("Deleted class")
  }

  function handleUserButtons(roleId, slotId) {
    switch (roleId) {
      // admin
      case "1":
        return (
          <div className='buttons'>
            <button onClick={handleDeleteClass}>Delete class </button>
            <button onClick={() => setModalIsOpen(false)} className='close'>Close</button>
          </div>
        )
      // member 
      case "2":
        console.log("roleId, slotId in handleUserButton: ", roleId, slotId)
        return (
          <div className='buttons'>
            <button onClick={handleRegister(slotId)}>Register Now! </button>
            <button onClick={() => setModalIsOpen(false)} className='close'>Close</button>
          </div>
        )
      // trainer
      case "3":
        return (
          <div className='buttons'>
            <button onClick={() => setModalIsOpen(false)} className='close'>Close</button>
          </div>
        )
      default:
        return (
          <div className='buttons'>
            <button onClick={() => setModalIsOpen(false)} className='close'>Close</button>
          </div>
        )
    }
  }

  return (
    <div>
      <div className='overlay'>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="modal">
          {modalData && (
            <div className='popup'>
              {console.log("ModalData: ", modalData)}
              <h1>Register for {modalData.title} at {modalData.start.toISOString().slice(11, 16)} - {modalData.end.toISOString().slice(11, 16)}</h1>
              {/* TODO: change below json as needed */}
              <p>Trainer: {modalData.trainerName}</p>
              <p>Location: {modalData.location}</p>
              <p>Capacity: {modalData.capacity}</p>
              <p>Currently Registered: {modalData.currentCount}</p>
              <p>Price for Enrollment: {modalData.price}</p>
              {handleUserButtons(userRoleId, modalData.slotId)}
            </div>
          )}


        </Modal>
      </div>

      <div className='calendar'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          height={700}
          initialView="timeGridWeek"
          allDaySlot={false}

          eventClick={handleEventClick}

          slotMinTime={"07:00:00"}
          slotMaxTime={"24:00:00"}

          events={timeSlotData} />
      </div>
    </div>
  )
}

export default Calendar
