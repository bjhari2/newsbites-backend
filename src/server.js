const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const app = express();
app.use(bodyParser.text())
app.use(cors())


app.post('/home', async (req, res) => {
    let url = req.body
    let data = await fetch(url, {
        method: 'get',
        headers: {
            authorization: process.env.API_KEY
        }
    })
    let json = await data.json()
    res.send(json)
})

app.listen(port, () => {
    console.log("Listening at port: ", port)
})