import express from "express";

const app  = express()
const PORT = 5000

app.get('/api', (req,res) => {
  res.send('Hello world')
})

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`)
})