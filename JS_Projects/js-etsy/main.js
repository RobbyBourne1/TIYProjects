const parent = document.querySelector('ul.items')
const maxDescLength = 140

data.forEach((currentItem, index) => {
  const newItem = document.createElement('li')

  //Title link
  const title = document.createElement('p')
  const link = document.createElement('a')
  link.href = currentItem.url
  link.textContent =currentItem.title

  title.appendChild(link)

  // too long
  const description = document.createElement('p')
  if (currentItem.description.length > maxDescLength) {
  description.textContent = currentItem.description.slice(0, maxDescLength) + '...'
    } else {
  description.textContent = currentItem.description
      }
  // britsh pounds
  const price = document.createElement('p')
  const symbol = (currentItem.currency_code === 'USD') ? '$' : '£'
  price.textContent =  `${symbol} ${currentItem.price}`

  // times vs time
  const views = document.createElement('p')
  const text = (currentItem.views === 1) ? 'time' : 'times'
  views.textContent = `Viewed ${currentItem.views} ${text}`

  newItem.appendChild(title)
  newItem.appendChild(description)
  newItem.appendChild(price)
  newItem.appendChild(views)

  parent.appendChild(newItem)

})
