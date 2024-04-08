import React from "react";
import { useState, useEffect } from "react";
// delete below
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const memberDashboard = () => {
    const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

    return (
        <div>
            <div className="classes">
                <h1>Classes</h1>

                <div className="scheduling">
                <Paper>
                    <Scheduler
                      data={schedulerData}
                    >
                      <ViewState
                        currentDate={currentDate}
                      />
                      <DayView
                        startDayHour={9}
                        endDayHour={17}
                      />
                      <Appointments />
                    </Scheduler>
                </Paper>
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