import logo from "../images/logo.png";
import "../styles/TicTacToeHeader.css";

const TicTacToeHeader = () => {
    return <div id="headerContainer">
      <img id="logoImage" src={logo} alt="logo" />
      <h1 id="title">Tic Tac Toe</h1>
    </div>
}

export default TicTacToeHeader;