class GameField {
    constructor() {
        //отрисока игрового поля
        this.boardSize = 10;
        this.board = [];
        this.gameBoardElement = document.querySelector('.field');
        this.createBoard();
    }

    createBoard() {
        for (let y = 0; y < this.boardSize; y++) {
            for (let x = 0; x < this.boardSize; x++) {
                const cell = document.createElement('div');
                cell.classList.add('field-cell');
                cell.dataset.x = x;
                cell.dataset.y = y;
                this.gameBoardElement.appendChild(cell);
                this.board.push(cell);
            }
        }

        this.board.forEach(cell => cell.className = 'field-cell');
    }
}

export default GameField;