const {Pool} = require('pg')

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database: 'nutrition_app',
    password:'112224',
    port:5432
})

module.exports = {pool}