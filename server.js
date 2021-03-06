const express = require('express')
const connectDB = require('./config/db.js')
const app = express()
const PORT = process.env.PORT || 5000

connectDB()

// Init Middleware
app.use(express.json({extended: false}))

// Define routes
app.use('/api/users', require('./routes/users.js'))
app.use('/api/contacts', require('./routes/contacts.js'))
app.use('/api/auth', require('./routes/auth.js'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


// _rscr
