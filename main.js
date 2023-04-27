let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    box = document.querySelector('.game__box'),
    score = 0,
    time = 0,
    interval = 0;
 
let colors = ['green','red','blue','purple','orange'] 
    
    

btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0;
        clearInterval(interval)
        start()
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }
})

box.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})


function start() {
    interval = setInterval(() => decrease(),1000)
    createBall()
}

function decrease() {
    if(time == 0) {
        endGame()
    }else {
        let currentTime = --time
        timeOut.innerHTML = currentTime
    }
}

function endGame() {
    box.innerHTML = `<h2 class="result">Вы набрали ${score} очков  </h2>`
}



function createBall() {
    let ball = document.createElement('div')
    let size = 40
    let cor = box.getBoundingClientRect()
    let x = random(0, cor.width - size)
    let y = random(0, cor.height - size)
    
    ball.classList.add('ball')
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.style.left = x + 'px'
    ball.style.top = y + 'px'
    ball.style.background = 'red'
    
    box.append(ball)
}

function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}