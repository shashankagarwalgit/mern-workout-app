const express = require('express');
const router = express.Router();
const { createWorkout, getAllWorkouts, getWorkoutById,
    deleteWorkout, updateWorkout
} = require('../controllers/workoutcontroller');

router.get('/', getAllWorkouts
    )
    .get("/:id", getWorkoutById
    )
    .post('/', createWorkout
    )
    .delete('/:id', deleteWorkout
    )
    .patch('/:id', updateWorkout
    );

module.exports = router;