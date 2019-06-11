// include packages
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// setup view engine
app.engine('handlebars', exphbs({ defultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting boy-parser
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('req.body', req.body)
  res.render('index')
})

// listening on port 
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})