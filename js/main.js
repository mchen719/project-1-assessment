console.log("Connected")

/*--------Constants--------*/
let num = 0


/*--------Cache Values--------*/
const outPut = document.getElementById("output")
const plusBtn = document.getElementById("plus-btn")
const minusBtn = document.getElementById("minus-btn")
const input = document.getElementById("num-input").value = "1"

/*--------Event Listeners--------*/
plusBtn.addEventListener("click", add)
minusBtn.addEventListener("click", minus)


/*--------Functions --------*/
function add() {
    const input = parseInt(document.getElementById("num-input").value)

    num = num + input
    if (num < 0){
        outPut.style.color = "red"
        outPut.innerText = num
    } else {
        outPut.style.color = "black"
        outPut.innerText = num
    }
}

function minus() {
    const input = parseInt(document.getElementById("num-input").value)

    num = num - input
    if (num < 0){
        outPut.style.color = "red"
        outPut.innerText = num
    } else {
        outPut.style.color = "black"
        outPut.innerText = num
    }
}