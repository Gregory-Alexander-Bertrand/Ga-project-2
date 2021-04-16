const models = require('../models')
const axios = require('axios')
const wordControllers = {}

wordControllers.search = async (req, res) => {
    try {
        let search = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${req.body.word}?key=ac3df2b2-fb26-4c50-9822-45655d18ed94`)
        console.log(search)
        res.send(search.data)
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

wordControllers.update = async (req, res) => {
    try {
        let update = await axios.put(`https://dictionaryapi.com/api/v3/references/collegiate/json/"+word+"?key=ac3df2b2-fb26-4c50-9822-45655d18ed94`)
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

wordControllers.create = async (req, res) => {
    try {
        let newWord = await models.word.create({
            name: req.body.name,
            notes: req.body.note
        })
        res.json({newWord})
    } catch (error) {
        res.json({error})
    }
}

// wordControllers.save = async (req, res) => {
//     try {
//         let save = await axios.post(`https://dictionaryapi.com/api/v3/references/collegiate/json/${req.body.word}?key=ac3df2b2-fb26-4c50-9822-45655d18ed94`)
//     } catch (error) {
//         console.log(error)
//         res.json({error})
//     }
// }

wordControllers.save = async (req, res) => {
    try {
    const word = await models.word.save({
        name: req.body.name,
        notes: req.body.notes
    })
        res.json({message: 'word saved', word})
    } catch (error) {
        res.status(400)
    }
}

// wordControllers.findAll = async (req, res) => {
//    try {
//         let findAll = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/"+word+"?key=ac3df2b2-fb26-4c50-9822-45655d18ed94`)
//     } catch (error) {
//         console.log(error)
//         res.json({error})
//     }
// }

module.exports = wordControllers