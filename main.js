const btn = document.querySelector('button')
const img = document.querySelector('img')

const URL = 'https://dog.ceo/api/breeds/image/random'

// fetch(URL).then().catch()
// fetch(URL).then(res => console.log(res)).catch(err => console.err(err))
// fetch(URL).then(res => res.json()).then(data => img.setAttribute('src', data.message)).catch(err => console.error(err))

btn.addEventListener('click', () => {
    fetch(URL).then(res => res.json()).then(data => img.setAttribute('src', data.message)).catch(err => console.error(err))
})

console.log('---------promise-------');

const test = new Promise((resolve, reject) => {
    if (true) {
        resolve('jest ok')
    } else {
        reject('błąd')
    }
})

test.then(info => console.log(info)).catch(err => console.error(err))

console.log('---------Async & await-------');






















