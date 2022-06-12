//Defini variabel
let prevNumber = " "
let calculationOperator = " "
let currentNumber ="0"

// mengambil element HTML di code javascript
const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=> {
    //Menambahkan event Clik ke setiap element
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber)
    })
})

//untuk memperbaharui layar ketika angka di tekan
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number
}

//memberikan inputNumber
const inputNumber = (number) => {
    //agar 0 hilang ketika di input angka
    if (currentNumber === "0") {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

//fungsi untuk melakukan operator
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber    
    }
    calculationOperator = operator
    currentNumber = ''
}

//Mengaktifkan fungsi kalkulasi
const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber);
})

//mengaktifkan operator kalkulasi
const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = prevNumber - currentNumber
            break
        case '*':
            result = prevNumber * currentNumber
            break
        case '/':
            result = prevNumber / currentNumber
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

//membuat tombol AC berjalan dengan lancar
const clearBtn = document.querySelector('.all-clear')

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})


//membuat function agar bisa menghitung nilai decimal
const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
    //Mencegah peng-inputan titik desimal berulang kali
    if (currentNumber.includes('.')) {
        return
    } 
    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

//menghitung persent
//const persent = document.querySelector('.percentage')

//persent.addEventListener('clik', (event) =>){
    //inputNumber(event.target, value)
//}



