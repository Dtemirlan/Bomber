// GameBoard.tsx

import React from 'react';
import '../GameBoard.css'; // Путь к файлу стилей GameBoard.css

interface GameBoardProps {
    targetFound: boolean;
    onCellClick: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ targetFound, onCellClick }) => {
    return (
        <div className="game-board">
            {targetFound ? (
                <div className="cell target">O</div>
            ) : (
                <div className="cell" onClick={onCellClick}>
                    {/* Пустой текст или другие символы, если нужно */}
                </div>
            )}
        </div>
    );
};

export default GameBoard;
