const models = require('../models')
const axios = require('axios')
const wordControllers = {}

wordControllers.search = async (req, res) => {
    try {
        let search = await axios.post('https://api.dictionaryapi.dev/api/v2/entries/en_US/<word>')
        console.log(search)
        res.send(search)
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

wordControllers.update = async (req, res) => {
    try {
        let update = await axios.put(`https://api.dictionaryapi.dev/api/v2/entries/en_US/<word>`)
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

module.exports = wordControllers