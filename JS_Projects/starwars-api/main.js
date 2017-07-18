// 1. First, find our UL Container
const parent = document.querySelector('ul')

// 2. Create our Ajax Request
let url = 'http://swapi.co/api/people/'

fetch(url).then(response => response.json()).then(data => {
  data.results.forEach(person => {
    const newItem = document.createElement('li')
    const name = person.name
    newItem.textContent = name
    parent.appendChild(newItem)
  })
})

// fetch(url).then(response => response.json()).then(data => {
//   data.results.forEach(function(person) {
//     let li = document.createElement('li')
//     li.textContent = person.name
//     parent.appendChild(li)
//   })
// })
