const button = document.querySelector('.button')
const adviceDiv = document.querySelector('.advice')
const adviceNumber = document.querySelector('.header')
async function getData() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    adviceDiv.textContent = '"' +  data.slip.advice + '"'
    adviceNumber.textContent = 'ADVICE # ' + data.slip.id
}
getData().catch(err => console.log(err.message))
button.addEventListener('click', () => {
    getData().catch(err => console.log(err.message))
})
