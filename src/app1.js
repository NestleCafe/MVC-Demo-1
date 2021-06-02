import $ from 'jquery'

const $btnAdd = $("#add1")
const $btnMinus = $("#minus1")
const $btnMul = $("#mul2")
const $btnDivide = $("#divide2")
const $number = $("#number")

$btnAdd.on("click", () =>{
    let currentNumber = parseInt($number.text())
    currentNumber ++
    $number.text(currentNumber)
})
$btnMinus.on("click", () =>{
    let currentNumber = parseInt($number.text())
    currentNumber --
    $number.text(currentNumber)
})
$btnMul.on("click", () =>{
    let currentNumber = parseInt($number.text())
    currentNumber *= 2
    $number.text(currentNumber)
})
$btnDivide.on("click", () =>{
    let currentNumber = parseInt($number.text())
    currentNumber /= 2
    $number.text(currentNumber)
})