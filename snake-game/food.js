import { onSnake, expandSnake } from './snake.js';
import { getRandomGridPos } from './grid.js'


const EXPANSION_RATE = 1;
let food = randomFoodPosition()


export function update() {
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = randomFoodPosition()
    }
}

export function draw(gameBoard) {
    
    
    let foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}


function randomFoodPosition() {
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = getRandomGridPos()
    }
    return newFoodPosition
}





