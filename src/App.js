import { useState } from "react";
import './styles/App.css';
import TicTacToeHeader from "./components/TicTacToeHeader";
import TicTacToeDisplay from './components/TicTacToeDisplay';
import TicTacToeControls from './components/TicTacToeControls';
import TicTacToeGame from './components/TicTacToeGame';

function App() {
  const [player, setPlayer] = useState("X");
  const [game, setGame] = useState(false);
  const [message, setMessage] = useState("Press on Play to Start!");
  const messageHandler = (msg) => {
    setMessage(msg);
  }
  const [box,setBox] = useState(["","","","","","","","",""]);
  const keyHandler = (key) => {
      if(game){
          if(!box[key]){
              if(box[key]!=="X" && box[key]!=="O"){
                  let newBox = box;
                  newBox[key] = player;
                  setBox(newBox);
                  playerHandler(player);
                  if(player==="X"){
                    messageHandler("Player O's turn!");
                  }else{
                    messageHandler("Player X's turn!");
                  }
              }
          }
      }
  }
  const gameHandler = (val) => {
    setGame(val);
  }
  const resetHandler = () => {
    gameHandler(false);
    messageHandler("Press on Play to Start!")
    setBox(["","","","","","","","",""]);
  }
  const resultHandler = (val) => {
    if(val==="X"){
      setMessage("Player X won the game!");
    }else if(val==="O"){
      setMessage("Player O won the game!");
    }else if(val==="Draw"){
      setMessage("Game was a Draw!")
    }
  }
  const playerHandler = (val) => {
    if(val==="X"){
      setPlayer("O");
    }else{
      setPlayer("X");
    }
  }
  return (
    <div className="App">
      <TicTacToeHeader />
      <TicTacToeDisplay />
      <TicTacToeControls
      resetHandler={resetHandler}
      gameHandler={gameHandler} 
      message={message}
      messageHandler={messageHandler} />
      <TicTacToeGame
      gameHandler={gameHandler}
      resultHandler={resultHandler}
      box={box}
      keyHandler={keyHandler} />
    </div>
  );
}

export default App;
