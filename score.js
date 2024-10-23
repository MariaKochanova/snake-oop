class Score {
    constructor(score) {
        // инициализировать начальное количество очков
        this._score = score;
    }

    draw() {
        // логика отрисоки блока с очками
    }

    increase() {
        // увеличивать количество очков
        // и перерисовывать наше табло
        this._score += 1;
        this.draw();
    }

    reset() {
        // сброс очков при смерти
        this._score = 0;
        this.draw();
    }
}

export default Score;