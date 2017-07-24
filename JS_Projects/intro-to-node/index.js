// const fs = require('fs')
//
// fs.readFile('practice.txt', (err, data) => {
//   if (err) {
//     console.log('oops')
//   } else {
//     console.log(data.toString())
//   }
// })

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const count = require('./count')

rl.question('Enter text: ', answer => {
  let textlength = count.calc(answer)

  if (textlength === 1) {
    console.log(`'${answer} has ${textlength} character.'`)
  } else {
    console.log(`'${answer}' has ${textlength} characters.`)
  }
})
