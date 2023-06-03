import { Board } from "./components/Board";
import { FollowMouse } from "./components/FollowMouse";
import { useGame } from "./hooks/useGame";

function Game() {
  const { board, updateBoard, resetGame, turn, winner } = useGame();

  return (
    <>
      <FollowMouse />
      <Board
        board={board}
        updateBoard={updateBoard}
        resetGame={resetGame}
        turn={turn}
        winner={winner}
      />
    </>
  );
}

export default Game;
