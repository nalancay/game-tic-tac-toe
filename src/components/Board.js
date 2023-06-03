import { Square } from "./Square";
import { TURNS } from "../constants";
import { WinnerModal } from "./WinnerModal";

export const Board = ({ board, updateBoard, resetGame, turn, winner }) => {
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame} style={{ color: "black" }}>
        Reset del juego
      </button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
};
