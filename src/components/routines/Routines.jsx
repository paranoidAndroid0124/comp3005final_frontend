import React, { useState } from 'react'
import { DndContext, closestCenter } from "@dnd-kit/core"

import "./routines.css"
import { Column, TrainerColumn } from '..'

function Routines() {
    const userRoleId = localStorage.getItem("roleId");

    if (userRoleId == 2) {
        // TODO: if user is member, then fetch only the routine set to that user (We can just make it so that each user has only one routine).
    } else if (userRoleId == 1 || userRoleId == 3) {
        // TODO: if user is trainer, then fetch ALL exercises, select memberID and customize their routine
    }

    // generated from chatgpt
    const exercises = [
        { "exercise_id": 1, "exercise_name": "Push-ups", "reps": 10, "duration": "30s" },
        { "exercise_id": 2, "exercise_name": "Sit-ups", "reps": 15, "duration": "45s" },
        { "exercise_id": 3, "exercise_name": "Jumping Jacks", "reps": 20, "duration": "60s" },
        { "exercise_id": 4, "exercise_name": "Burpees", "reps": 10, "duration": "40s" },
        { "exercise_id": 5, "exercise_name": "Squats", "reps": 15, "duration": "50s" },
        { "exercise_id": 6, "exercise_name": "Lunges", "reps": 12, "duration": "40s" },
        { "exercise_id": 7, "exercise_name": "Plank", "reps": 1, "duration": "60s" },
        { "exercise_id": 8, "exercise_name": "Mountain Climbers", "reps": 20, "duration": "60s" },
        { "exercise_id": 9, "exercise_name": "High Knees", "reps": 20, "duration": "60s" },
        { "exercise_id": 10, "exercise_name": "Leg Raises", "reps": 15, "duration": "45s" },
        { "exercise_id": 11, "exercise_name": "Russian Twists", "reps": 20, "duration": "60s" },
        { "exercise_id": 12, "exercise_name": "Bicycle Crunches", "reps": 20, "duration": "60s" },
        { "exercise_id": 13, "exercise_name": "Side Plank Left", "reps": 1, "duration": "30s" },
        { "exercise_id": 14, "exercise_name": "Side Plank Right", "reps": 1, "duration": "30s" },
        { "exercise_id": 15, "exercise_name": "Tuck Jumps", "reps": 10, "duration": "30s" },
        { "exercise_id": 16, "exercise_name": "Box Jumps", "reps": 10, "duration": "40s" },
        { "exercise_id": 17, "exercise_name": "Wall Sit", "reps": 1, "duration": "45s" },
        { "exercise_id": 18, "exercise_name": "Calf Raises", "reps": 20, "duration": "60s" },
        { "exercise_id": 19, "exercise_name": "Flutter Kicks", "reps": 20, "duration": "45s" },
        { "exercise_id": 20, "exercise_name": "Arm Circles", "reps": 15, "duration": "30s" }
    ];

    const renderColumns = () => {
        switch (userRoleId) {
            case '1':
                // admin
                return <TrainerColumn exercises={exercises} />;
            case '2':
                // member
                return <Column exercises={exercises} />;
            case '3':
                // trainer
                console.log("trainer column")
                return <TrainerColumn exercises={exercises} />;
            default:
                return <div>No routines available for your role</div>;
        }
    }


    return (
        <div className='routineBody'>
            <DndContext collisionDetection={closestCenter}>
                {renderColumns()}
            </DndContext>
        </div>
    )
}

export default Routines
