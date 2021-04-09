const models = require('../models')

const userControllers = {}

userControllers.create = async (req, res) => {
    try {
        const user = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        res.json({message: 'complete', user})
    } catch (error) {
        res.status(400)
    }
}

userControllers.login = async (req, res) => {
    const user = await models.user.findOne({
        where: {
            email: req.body.email
        }
    })
    if (user && (user.password === req.body.password)) {
        res.status(200)
        res.json({id: user.id, name: user.name})
    } else {
        res.status(401)
    }
}

module.exports = userControllers