let container = document.querySelector('.container')
let height = container.clientHeight - 50
let width = container.clientWidth - 50
let balls = document.querySelectorAll('.ball')

function test(ball) {
    let top = height / 2
    let left = width / 2

    setInterval(() => {
        top = updateCoordinate(top, height, 50)
        ball.style.top = top + 'px'

        left = updateCoordinate(left, width, 50)
        ball.style.left = left + 'px'

        ball.style.opacity = Math.random()

        const scale = Math.random() * 2
        ball.style.transform = `scale(${scale + (Math.random() - 0.5)})`
    }, 100)
}

function updateCoordinate(initialValue, upperMargin, lowerMargin) {
    let newValue = initialValue
    let delta = (Math.random() - 0.5) * 100
    newValue += delta
    if (newValue < lowerMargin) {
        newValue = lowerMargin
    }
    if (newValue > upperMargin) {
        newValue = upperMargin
    }
    return newValue
}

balls.forEach(ball => {
    test(ball)
})