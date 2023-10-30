// Game.tsx

import React, { useState } from 'react';
import GameBoard from './GameBoard'; // Путь к компоненту GameBoard

const Game: React.FC = () => {
    const [targetFound, setTargetFound] = useState(false);

    const handleCellClick = () => {
        // Логика обработки клика на клетке
        // Устанавливает targetFound в true, если цель (кольцо) найдена
        setTargetFound(true);
    };

    const handleResetClick = () => {
        // Логика сброса игры
        // Устанавливает targetFound в false и выполняет другие действия, если необходимо
        setTargetFound(false);
    };

    return (
        <div className="game-container">
            <h1>Игра нахождения цели</h1>
            <GameBoard targetFound={targetFound} onCellClick={handleCellClick} />
            <div className="attempts-counter">Попытки: 0</div>
            <button className="reset-button" onClick={handleResetClick}>
                Сбросить игру
            </button>
        </div>
    );
};

export default Game;
