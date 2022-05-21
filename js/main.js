const number = document.querySelector('#number')
const buttonCalc = document.querySelector('#calc')

const calcFib = (n) => {
    let n1 = 1
    let n2 = 1
    if (n === 0) return n
    if (n <= 1) return n1
    while (n > 1) {
        let temp = n1
        n1 = n2
        n2 = temp + n2
        n--
    }
    return n1
}

buttonCalc.addEventListener('click', working)

function working() {
    const res = calcFib(1000000000)
    number.innerHTML =  res
}
