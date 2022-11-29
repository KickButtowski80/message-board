const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const messages = require('./db/messages')

const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(202).json({
        message: 'Behold The MENV Stack!'
    })
})

app.get('/messages', (req, res) => {
    const messagesDB = messages.getAll()
    res.status(200).json(messagesDB)
})

app.post('/messages', async (req, res) => {
    const message = await messages.create(req.body)
    res.status(200).json(message)

})

const port = 4000

app.listen(port, () => {
    console.log(`listening on ${port}`)
})