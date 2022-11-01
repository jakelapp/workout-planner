const mongoose = require('mongoose')

const Schema = mongoose.Schema
//function to create a new schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
}, { timestamps: true })
//schema defines the structure of data or a document

module.exports = mongoose.model('Workout', workoutSchema)
//Models are based on schemas, and applies that schema to a model and use that model to interact

