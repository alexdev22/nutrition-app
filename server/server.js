const express = require('express')
const pool = require('./database').pool


const app = express()

app.listen(3000, () => {
    console.log('listening on port 3000');
})

app.get('/api/food', async (req, res) => {
const {alimento, proteinas, grasas, hidratos} = req.body
const text = 'INSERT INTO food (alimento, proteinas, grasas, hidratos) VALUES ($1, $2, $3, $4)'
const values = [alimento, protienas, grasas, hidratos]

try {
    const database = await pool.query(text, values)
    res.json('Saved to database')
} catch (error) {
    res.json(error)
}

    
})