const express = require('express')

const app = express()

app.get('/', (req, res) => res.send("Hello world !!!"))
app.get('/hi', (req, res) => res.send("Good Afternoon !!"))

app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
})