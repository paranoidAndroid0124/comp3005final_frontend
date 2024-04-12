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
  const data = [
    { title: 'Yoga Class', date: "2024-04-11T12:30:00-05:00"}, 
    { title: 'Biking Class', date: new Date().toISOString() }
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
              <h1>Register for {modalData.title}</h1>
              {/* TODO: change below json as needed */}
              <p>Trainer: {modalData.trainerName}</p>
              <p>Location: {modalData.location}</p>
              <p>Capacity: {modalData.capacity}</p>
              <p>Currently Registered: {modalData.currentCount}</p>
            </div>
          )}
          <button onClick={handleRegister}>Register Now! </button>
          <button onClick={() => setModalIsOpen(false)} className='close'>Close</button>
        </Modal>
      </div>

        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        allDaySlot={false}

        eventClick={handleEventClick}

        slotMinTime={"06:00:00"}

        events={data} />
    </div>
  )
}

export default Calendar
