import React, { useState } from 'react';
import Square from './Square';
import EndGame from './EndGame';



const Initial = ''
const x_player = 'X';
const o_player = 'O';
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function TicTacToe() {
    const [grid, setGrid] = useState(Array(9).fill(Initial));
    const [player, setPlayer] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const [draw, setDraw] = useState(false);
    const [winCount, setwinCount] = useState({ x: 0, o: 0 });

    function isGameOver() {
        if (!gameFinished) {
            // x wins
            for (let i = 0; i < winCombinations.length; i++) {
                if (grid[winCombinations[i][0]] === x_player && grid[winCombinations[i][1]] === x_player && grid[winCombinations[i][2]] === x_player) {
                    setGameFinished(true)
                    setwinCount({ ...winCount, x: winCount.x + 1 });
                    console.log('x wins')
                    return;
                }
            }
            // o wins
            for (let i = 0; i < winCombinations.length; i++) {
                if (grid[winCombinations[i][0]] === o_player && grid[winCombinations[i][1]] === o_player && grid[winCombinations[i][2]] === o_player) {
                    setGameFinished(true)
                    setwinCount({ ...winCount, o: winCount.o + 1 });
                    console.log('o wins')
                    return;
                }
            }




            //check if game is a draw
            if (!grid.includes(Initial)) {
                setDraw(true);
                setGameFinished(true);
                console.log('draw')
            }
        }
    }

    function restartGame() {
        setGrid(Array(9).fill(Initial));
        setGameFinished(false);
        setDraw(false);
    }

    function clearHistory() {
        setwinCount({ x: 0, o: 0 });
    }

    isGameOver()

    function handleClick(id) {
        setGrid(
            grid.map((item, index) => {
                if (index === id) {
                    if (player === true) {
                        return x_player
                    } else {
                        return o_player
                    }
                } else {
                    return item
                }
            })
        )
        setPlayer(!player)
    }



    return (
        <div>

            {gameFinished &&
                <EndGame
                    winCount={winCount}
                    restartGame={restartGame}
                    player={player}
                    draw={draw}
                    clearHistory={clearHistory}
                />}
            <Square clickedArray={grid} handleClick={handleClick} />
        </div>
    );
}

export default TicTacToe;