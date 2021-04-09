const express = require('express')
const app = express()
const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)
const userRoutes = require('./routes/userRoutes')





  app.use(express.json())
  app.use(require('cors')())

//   app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`)
//     routesReport.print()
//     })

const PORT = process.env.port || 3001
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
    routesReport.print()
})

app.use('/user', userRoutes)