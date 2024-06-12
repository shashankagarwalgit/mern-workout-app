const workoutModel = require('../models/workoutModel');
const mongoose = require('mongoose');
//get all workouts
const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await workoutModel.find({}).sort({ createdAt: -1 });
        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
//get workout by id
const getWorkoutById = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Workout not found' });
    }
    const workout = await workoutModel.findById(id);

    if(!workout) {
        return res.status(404).json({ message: 'Workout not found' });
    }

    res.status(200).json(workout);
}

//create a workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;

    try {
        const workout = await workoutModel.create({ title, reps, load });
        workout.save();
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Workout not found' });
    }
    const workout = await workoutModel.findOneAndDelete({_id: id});
    if(!workout) {
        return res.status(404).json({ message: 'Workout not found' });
    }
    res.status(200).json(workout);
}
//update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Workout not found' });
    }
    const workout = await workoutModel.findOneAndUpdate({_id: id}, {...req.body}, {new: true});
    if(!workout) {
        return res.status(404).json({ message: 'Workout not found' });
    }
    res.status(200).json(workout);
}

module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkoutById,
    deleteWorkout,
    updateWorkout
}