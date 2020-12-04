let lastRenderTime = 0;
import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js';
import { outsideGrid } from './grid.js'
import { update as updateFood, draw as drawFood } from './food.js'
const gameBoard = document.querySelector('.game-board');
let gameOver = false

function main(currentTime) {

    if(gameOver) {
        if(confirm('press ok to start agsain')) {
            window.location.reload()
        }
        return
    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return 
    
    lastRenderTime = currentTime

    update();
    draw();
    
}

window.requestAnimationFrame(main)


function update() {
    updateSnake()
    updateFood()
    checkDeath()
}


function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}



