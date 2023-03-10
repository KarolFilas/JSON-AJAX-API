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

const checkAge = age => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve()
        } else {
            reject('Masz za mało lat!')
        }
    })
}

const doubleCheck = () => {
    return new Promise(resolve => {
        console.log('sprawdzam jeszcze raz...')
        setTimeout(() => {
            resolve('Faktycznie, wiek się zgadza.')
        }, 1000);
    })
}

// checkAge(50).then(() => {
//     console.log('Chyba możesz wejsc')
//     return doubleCheck()
// }).then(res => console.log(res)).then(() => {
//     console.log('weryfikacja zakończonona')
// }).catch(error => console.error(error))

async function one() {
    try {
        await checkAge(22)
        console.log('chyba możesz wejsc')
        await doubleCheck()
        console.log('Faktycznie, wiek się zgadza.')
        console.log('weryfikacja zakończonona')
    } catch {
        console.error('błąd, masz za mało lat');
    }

}

one()

fetch(URL).then(res => res.json()).then(data => console.log(data)).catch(error => console.error(error))

async function urlTest() {
    try {
        const res = await fetch(URL)
        const data = await res.json()
        console.log(data);
    } catch {
        console.error('błąd, errors');
    }
}

urlTest()








