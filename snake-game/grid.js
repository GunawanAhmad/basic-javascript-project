const GRID_SIZE = 21

export function getRandomGridPos() {
    console.log('asdasd')
    return {
        x : Math.floor(Math.random() * GRID_SIZE) + 1,
        y : Math.floor(Math.random() * GRID_SIZE) + 1
    }
}


export function outsideGrid(postion) {
    return (postion.x < 1 || postion.x > GRID_SIZE || postion.y < 1 || postion.y > GRID_SIZE)
}