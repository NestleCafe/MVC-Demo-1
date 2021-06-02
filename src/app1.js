import $ from 'jquery'

const $btnAdd = $("#add1")
const $btnMinus = $("#minus1")
const $btnMul = $("#mul2")
const $btnDivide = $("#divide2")
const $number = $("#number")
let localNumber = localStorage.getItem("localNumber")
$number.text(localNumber || 100)

$btnAdd.on("click", () =>{
    let localNumber = parseInt($number.text())
    localNumber ++
    localStorage.setItem("localNumber",localNumber)
    $number.text(localNumber)
})
$btnMinus.on("click", () =>{
    let localNumber = parseInt($number.text())
    localNumber --
    localStorage.setItem("localNumber",localNumber)
    $number.text(localNumber)
})
$btnMul.on("click", () =>{
    let localNumber = parseInt($number.text())
    localNumber *= 2
    localStorage.setItem("localNumber",localNumber)
    $number.text(localNumber)
})
$btnDivide.on("click", () =>{
    let localNumber = parseInt($number.text())
    localNumber /= 2
    localStorage.setItem("localNumber",localNumber)
    $number.text(localNumber)
})