
const button = document.querySelector('.btn')
const jokeElement = document.querySelector('.joke')

console.log(button, jokeElement)

async function getJoke() {
  const data = await fetch('https://icanhazdadjoke.com', {
    headers: {
      accept: 'application/json'
    }
  })
  const response = await data.json()
  // console.log(response)
  jokeElement.innerHTML = response.joke
}

button.addEventListener('click', getJoke)