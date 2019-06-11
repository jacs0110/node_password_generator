// include packages
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// setup view engine
app.engine('handlebars', exphbs({ defultLayout: 'main' }))
app.set('view engine', 'handlebars')

// routes
app.get('/', (req, res) => {
  console.log('Express')
  res.send('Hello world')
})

// listening on port 
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})