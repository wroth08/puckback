const router = (module.exports = require('express').Router());
var knex = require('../knex')

const fetch = require('node-fetch')

router.get('/', function (req, res) {
    knex.select('name', 'id', 'email')
    .from('users')
    .then( function (data) {
      res.json(data)
    })
})

router.post('/', function (req, res) {
    let row = req.body
    knex.select('email')
        .from('users')
        .where('email', row.email)
        .then( (data) => {
            if (data[0] === undefined) {
                var bcrypt = require('bcrypt')
                const saltRounds = 10
                const prepass = row.password
                bcrypt.hash(prepass, saltRounds, function(err, hash) {
                    row['password'] = hash
                    knex('users')
                        .insert(row)
                        .returning('*')
                        .then( (data) => {
                            res.json(data)
                        })
                })
            } else {
                res.send("email already registered")
            }
        })
})

router.post('/login', function (req, response) {
    let row = req.body
    knex.select('password')
        .from('users')
        .where('email', row.email)
        .then( (data) => {
                hash = data[0].password
                var bcrypt = require('bcrypt')
                bcrypt.compare(row.password, hash, function(err, res) {
                    if (res) {
                        response.status(200).send('ok')
                    } else {
                        response.status(404).send('incorrect username or password')
                    }
                })
        })
        .catch( (error) => {
            response.status(404).send('email not registered')
        })
})