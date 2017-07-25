const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('Hello/ GoodBye App ' + '<a href= "/goodbye"<div>GoodBye</div>' + ' <a href="/hello"<div>Hello</div>')
})

app.get('/goodbye', (request, response) => {
  response.send('GoodBye!! Seeyaa Later' + ' <a href="/"<div>Home</div>')
})

app.get('/hello', (request, response) => {
  response.send('Hello!! Welcome :)' + ' <a href="/"<div>Home</div>')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
