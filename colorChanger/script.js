let bgcolor = document.getElementById("colorbg")
// bgcolor.style.backgroundColor = red
let button = document.getElementById("clickme")
button.addEventListener("click", bgColorGenerator)
function bgColorGenerator(){
    console.log("ddjdjd")
    const code = "0123456789ABCDEF"
    let newColorCode = "#"
    for (let i=0; i<6;i++ ){
        newColorCode += code[Math.floor(Math.random()*16)]
    }
    console.log(newColorCode)
    bgcolor.style.backgroundColor = newColorCode
}