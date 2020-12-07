import React, { useState } from 'react';
import Board from './Board';
import './Game.css';

const calculateWinner = (squares: number[]): number | null => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const Game = (): React.ReactElement => {
    // State vars
    const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);

    // Event handlers
    const handleClick = (i: number): void => {
        const newHistory = history.slice(0, stepNumber + 1);
        const { squares } = newHistory[newHistory.length - 1];
        const newSquares = squares.slice();
        if (calculateWinner(newSquares) || newSquares[i]) {
            return;
        }

        // Update state
        newSquares[i] = xIsNext ? 'X' : 'O';
        setHistory([...newHistory, { squares: newSquares }]);
        setStepNumber(newHistory.length);
        setXIsNext(!xIsNext);
    }

    const jumpTo = (step: number): void => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }

    // Component
    const { squares } = history[stepNumber];
    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    const moves = history.map((step, move) => (
        <li key={move}>
            <button onClick={() => jumpTo(move)}>
                {move ? `Go to move #${move}` : 'Go to game start'}
            </button>
        </li>
    ));

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={squares}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default Game;
