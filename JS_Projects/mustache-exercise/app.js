const express = require('express')
const path = require('path')
const mustacheExpress = require('mustache-express')

const app = express()

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
// app.get('/', function(req, res) {
//   res.render('todo')
// })

app.get('/todo/', function(req, res) {
  const data = {
    listName: 'TODO',
    list: [{ item: 'Learn Node' }, { item: 'Learn Express' }, { item: 'Learn Mustache' }]
  }
  res.render('todo', data)
})

app.listen(3000, function() {
  console.log('Successfully started express application!')
})
