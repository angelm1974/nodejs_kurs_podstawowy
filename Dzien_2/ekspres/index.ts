const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Witaj świecie!')
})

app.listen(port, () => {
  console.log(`Aplikacja uruchamia się pod adresem http://localhost:${port}`)
})