import React from 'react'

export default function EndGame({ restartGame, player, draw, winCount, clearHistory }) {
    return (
        <div className='end-game-screen'>
            {!draw && <span className='win-text'>{player ? 'o wins!!🥳' : 'x wins!!🥳'}</span>}
            {draw && <span className='win-text'>draw</span>}

            <span className='win-history'>
                x win count: {winCount.x} <br />
                o win count: {winCount.o}

            </span>

            <button className='btn' onClick={restartGame}>Restart</button>
            <button className='btn' onClick={clearHistory}>Clear history</button>
        </div>
    )
}
