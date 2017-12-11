const router = (module.exports = require('express').Router());
var knex = require('../knex')

router.post('/', (req, res) => {
    let data = req.body.data
    console.log(data)
    knex('teams')
        .where('favorited', 'y')
        .update({
            'favorited': 'n'
        }).then( () => {
            Promise.all(data.map( (team) => {
                console.log(team)
                return knex('teams')
                    .where('name', '=', team)
                    .update({
                        'favorited': 'y'
                    })
            }))
        })
        .then( () => {
            res.status(200).send('ok')
        })
})