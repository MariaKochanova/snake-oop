import GameField from './gameField.js';
import Snake from './snake.js';
import Apple from './apple.js';
import Score from './score.js';

class Main {
    constructor() {
        this.gameField = new GameField();
        this.snake = new Snake();
        this.apple = new Apple();
        this.score = new Score(0);
    }

    update() {
        //логика обновления каких-либо данных
        //при изменении
    }

    draw() {
        //отрисовывать все части игры
    }
}

export default Main;