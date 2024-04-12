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
  
  // TODO: make get request to backend, prolly useeffect
  useEffect(() => {
    try{
      
    } catch(err){
      console.log(err)
    }
  })

  const data = [
    { title: 'Yoga Class', start: "2024-04-11T12:30:00", end: "2024-04-11T17:30:00"}, 
    { title: 'Biking Class', start: "2024-04-11T12:30:00", end: "2024-04-11T17:30:00" }
  ]


  const handleEventClick = (arg) => {
    setModalIsOpen(true)
    setModalData(arg.event)
  }

  // TODO: make POST request to backend
  // TODO: if admin, then do not show register, show delete button, add "add" button
  function handleRegister(){
    console.log("Registered!")
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
          <div className='buttons'>
            <button onClick={handleRegister}>Register Now! </button>
            <button onClick={() => setModalIsOpen(false)} className='close'>Close</button>
          </div>
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

        events={data} />
      </div>
    </div>
  )
}

export default Calendar
