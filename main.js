let cards = document.querySelector(".container .cards")

let prog = ["PHP" , "PYTHON" , "JAVASCRIPT" , "HTML" , "CSS" , "CPP" , "JAVA" , "C-sharp" , "RUBY" , "KOTLIN"]

let spans = []

let startButton = document.querySelector(".start button")

if(sessionStorage.getItem("count")) {
    console.log(true)
} else {
    sessionStorage.setItem("count" , 0)
}

if (sessionStorage.getItem("count") == 0) {
    startButton.onclick = function () {
        sessionStorage.setItem("userName" , prompt("Enter Your Name"))
        let hello = document.querySelector(".container header p:nth-of-type(1)")
        hello.textContent = `Hello: ${sessionStorage.getItem("userName")}`
        document.querySelector(".start").remove()
    }
} else {
    let hello = document.querySelector(".container header p:nth-of-type(1)")
    hello.textContent = `Hello: ${sessionStorage.getItem("userName")}`
    document.querySelector(".start").remove()
}


let k = 0
for (let i = 0; i < 10; i++) {
    for(let j = 0; j < 2; j++) {
        let span = document.createElement("span")
        let front = document.createElement("div")
        front.classList.add("front")
        let txt = document.createTextNode("!")
        front.appendChild(txt)
        let back = document.createElement("div")
        back.classList.add("back")
        span.classList.add(`card`)
        span.appendChild(front)
        span.appendChild(back)

        while (k < prog.length) {
            span.classList.add(`${prog[Math.floor(k)]}`)
            k += .5
            break
        }
        spans.push(span)
    }
}

for(let k = 0; k < 20; k++) {
    let randomNumber = Math.floor(Math.random() * spans.length)
    cards.appendChild(spans[randomNumber])
    spans.splice(randomNumber , 1)
}

let card = document.querySelectorAll(".container .cards .card")

let front = document.querySelectorAll(".container .cards .card .front")
let frontList = [...front]

let ele = []
ele.length < 3

let eleIndex = []

let incorrectTries = 1

let wrongCount = document.querySelector(".container header p:nth-of-type(2)")


cards.addEventListener("click" , function (e) {

    let index = frontList.indexOf(e.target);
    card[index].style.cssText = "transform: rotateY(180deg);";

    let classN = card[index].classList[1]
    ele.push(classN)

    eleIndex.push(index)

    if(ele.length === 2) {
        cards.style.cssText = "pointer-events:none;"
        if(ele[0] === ele[1]) {
            card[eleIndex[0]].classList.add("fliped")
            card[eleIndex[1]].classList.add("fliped")
            ele = []
            eleIndex = []
            cards.style.cssText = "pointer-events:all;"
        } else {
            setTimeout(function() {
                    card[eleIndex[0]].style.cssText = "transform: rotateY(0deg);";
                    card[eleIndex[1]].style.cssText = "transform: rotateY(0deg);";
                    ele = []
                    eleIndex = []
                    incorrectTries++
                    cards.style.cssText = "pointer-events:all;"
                },1100)
                wrongCount.textContent = `Wrong Tries: ${incorrectTries}`
            }
        }
        let check = [...card].every( function (e) {
            return [...e.classList].includes("fliped")
        })
        if(check) {
            let playAgain = document.createElement("div")
            playAgain.classList.add("start")
            playAgain.classList.add("flex")
            playAgain.classList.add("justify-center")
            playAgain.classList.add("items-center")
            playAgain.classList.add("w-full")
            playAgain.classList.add("h-full")
            playAgain.classList.add("absolute")
            playAgain.classList.add("top-0")

            let playAgainButton = document.createElement("button")
            playAgainButton.classList.add("text-white")
            playAgainButton.classList.add("rounded-lg")
            playAgainButton.innerHTML = "Play Again"

            let win = document.createElement("p")
            win.textContent = "Congratulation You Are Win"

            playAgain.append(win , playAgainButton)
            document.body.appendChild(playAgain)
            console.log(sessionStorage.getItem("count"))
            sessionStorage["count"]++

            playAgainButton.onclick = function() {
                window.location.reload()
            }
        }
    })