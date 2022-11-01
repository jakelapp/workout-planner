

require('dotenv').config()
// require dotenv package that attaches environment variables to process Object

const express = require('express')
// requires the express package^^

const mongoose = require('mongoose')
// Require mongoose

const workoutRoutes = require('./routes/workouts')

const app = express()
// start up express app (function calling it app and setting it = express)^^

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
//register global middleware (if you dont use next function it will never go to next middleware below)

app.use('/api/workouts', workoutRoutes)
// route handler (reacts to requests)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
// use mongoose object above to connect to the database
        // Listen for requests using method listen 
        // (pprocess.env.PORT is pulling From .env file what port we are using)


