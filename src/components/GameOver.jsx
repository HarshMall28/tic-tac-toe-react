export default function GamerOver({ winner, onSelect }) {
  return (
    <div id="game-over">
      <h2>Game Over !!</h2>
      {winner && <p>{winner} won !!</p>}
      {!winner && <p>Its a draw!!</p>}
      <p>
        <button onClick={onSelect}>Rematch!</button>
      </p>
    </div>
  );
}
