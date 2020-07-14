const express = require('express')

const app = express()

app.get('/',(req, res) =>{
    res.send("Hey Fellas!")
})

app.listen(3001)