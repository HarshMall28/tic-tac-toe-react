export default function GameBoard({ onSelectPlayer, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <div className="row">
            {row.map((playerSymbol, colIndex) => (
              <button
                key={colIndex}
                onClick={() => onSelectPlayer(rowIndex, colIndex)}
                disabled={playerSymbol !== null}
              >
                {playerSymbol}
              </button>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
