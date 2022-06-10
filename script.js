// mengambil element HTML di code javascript
const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=> {
    //Menambahkan event Clik ke setiap element
    number.addEventListener("click", (event) => {
        updateSceen(event.target.value);
    })
})

//untuk memperbaharui layar ketika angka di tekan
const calculatorScreen = document.querySelector(".calculator-screen");

const updateSceen = (number) => {
    calculatorScreen.value = number
}