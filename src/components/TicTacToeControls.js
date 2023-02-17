import "../styles/TicTacToeControls.css";

const TicTacToeControls = ({ resetHandler, gameHandler, message, messageHandler }) => {
    return <div id="ticTacToeControls">
        <button
        id="playButton"
        className="controlButton"
        onClick={()=>{
            if(message==="Press on Play to Start!"){
                gameHandler(true);
                messageHandler("Player X's turn!");
            }
        }}
        >Play</button>
        <div id="message">{message}</div>
        <button
        id="resetButton"
        className="controlButton"
        onClick={()=>{
            resetHandler();
        }}
        >Reset</button>
    </div>
}

export default TicTacToeControls;