const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')

const port = 5000

const app = express();
app.use(bodyParser.text())
app.use(cors())


app.post('/home', async (req, res) => {
    let apiKey = req.headers.authorization.toString()
    let url = req.body
    let data = await fetch(url, {
        method: 'get',
        headers: {
            authorization: apiKey
        }
    })
    let json = await data.json()
    res.send(json)
})

app.listen(port, () => {
    console.log("Listening at port: ", port)
})