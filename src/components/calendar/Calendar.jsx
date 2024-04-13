import React,{ useState, useEffect } from 'react'
import Modal from 'react-modal'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';
import "./calendar.css"

function Calendar() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalData, setModalData] = useState(null)
  const [timeSlotData, setTimeSlotData] = useState([{
    slotId: "",
    start: "",
    end: "",
    title: "",
    location: "",
    capacity: "",
    currentCount: "",
  }]);
  let timeSlotOptions;

  const userRoleId = localStorage.getItem("roleId");

  // Fetch time slots
  const fetchTimeSlots = async() => {
    try{
      const response = await fetch('http://localhost:3001/timeslots', {
        method: 'GET',
        headers: {
            'Content-type' : 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Http error status: ${response.status}`);
      }

      const data = await response.json();

      // fetching doesnt store hour and minute data?
      const timeSlotOptions = data.map(timeSlot => ({
        slotId: timeSlot.slot_id,
        start: timeSlot.start_time,
        end: timeSlot.end_time,
        title: timeSlot.title,
        location: timeSlot.room, 
        capacity: timeSlot.capacity,
        currentCount: timeSlot.current_enrollment,
      }));
  
      console.log("timeSlotOptions: ", timeSlotOptions)

      setTimeSlotData(timeSlotOptions);
    } catch(err){
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
  function handleRegister(){
    console.log("Registered!")
  }

  // TODO: make POST request to backend
  function handleDeleteClass(){
    console.log("Deleted class")
  }

  function handleUserButtons(roleId){
    switch (roleId){
      // admin
      case "1":
        return(
          <div className='buttons'>
            admin
            <button onClick={handleDeleteClass}>Delete class </button>
            <button onClick={() => setModalIsOpen(false)} className='close'>Close</button>
          </div>
        )
      // member 
      case "2":
        return( 
          <div className='buttons'>
            member
            <button onClick={handleRegister}>Register Now! </button>
            <button onClick={() => setModalIsOpen(false)} className='close'>Close</button>
          </div>
        )
      // trainer
      case "3":
        return(
          <div className='buttons'>
            trainer
            <button onClick={() => setModalIsOpen(false)} className='close'>Close</button>
          </div>
        )
      default: 
      return(
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
              <h1>Register for {modalData.title} at {modalData.start.toISOString().slice(11,16)} - {modalData.end.toISOString().slice(11,16)}</h1>
              {/* TODO: change below json as needed */}
              <p>Trainer: {modalData.trainerName}</p>
              <p>Location: {modalData.location}</p>
              <p>Capacity: {modalData.capacity}</p>
              <p>Currently Registered: {modalData.currentCount}</p>
            </div>
          )}
          
            {handleUserButtons(userRoleId)}
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
