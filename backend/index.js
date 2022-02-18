require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()


// CORS MIDDLEWARE 
app.use( cors({origin: true, credentials: true}) )  

// SERVE JSON REQUESTS
app.use( express.json() )  


app.post('/newUser', (req, res) => {

    const newUser = {id: 1, ...req.body}
    console.log(newUser)
    res.json({user: newUser})

})

// ROUTES
app.use('/auth', require('./routes/auth.route'))
app.use('/profile', require('./routes/profile.route'))
app.use('/doctors', require('./routes/index.route') )

// PORT TO RUN OUR APP ON
const port = process.env.PORT || 4000
// LISTEN FOR REQUESTS
app.listen(port, () => console.log(`Server listening on localhost:${port}`))
