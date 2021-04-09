const express = require('express')
const app = express()
const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)
const userRoutes = require('./routes/userRoutes')
const axios = require('axios');

const getData = async () => {
    return await axios ({
        url: 'https://api.dictionaryapi.dev/api/v2/entries/en_US/deaf'
    })
}


 (async () => {
     const definiton = await getData()
     console.log(definiton.data.meanings)
 })()

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