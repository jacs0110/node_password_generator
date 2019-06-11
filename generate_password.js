// generate_password.js

// define a sample function to randomly reture an item in an array
function sample(array) {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generatePassword function
function generatePassword(options) {
  // define what user wants
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '~!@#$%^&*()-_=+{}[]|\:;"<>,.?/'

  // dummy data
  // const options = {
  //   length: '12',
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   excludeCharacters: '123456789abcdABCD'
  // }

  // create a collection to store what user picked up
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  if (options.excludeCharacters) {
    collection = collection.filter(char => !options.excludeCharacters.includes(char))
  }

  // generate password
  let password = ''
  for (let i = 0; i < options.length; i++) {
    password += sample(collection)
  }

  return password
}

// export function
module.exports = generatePassword