const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()
//creates instance of router

router.get('/', getWorkouts) 
//route handler to GET all workouts

router.get('/:id', getWorkout)
//GET a single workout with id

router.post('/', createWorkout)
//POST a new workout

router.delete('/:id', deleteWorkout)
//DELETE a workout


router.patch('/:id', updateWorkout)
//UPDATE a workout


module.exports = router
//export router