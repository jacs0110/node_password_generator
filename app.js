// include packages and setup server variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generatePassword = require('./generate_password')
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
  const options = req.body
  const password = generatePassword(req.body)
  res.render('index', { password: password, options: options })
})

// listening on port 
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})