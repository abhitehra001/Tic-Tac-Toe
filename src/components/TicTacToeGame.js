
import "../styles/TicTacToeGame.css";

const TicTacToeGame = ({ gameHandler, resultHandler, box, keyHandler}) => {
    const checkWin = () => {
        for (let i=0;i<box.length;i+=3){
            if(box[i]!=="" && box[i]===box[i+1] && box[i+1]===box[i+2]){
                gameHandler(false);
                resultHandler(box[i])
                return;
            }
        }
        for (let i=0;i<3;i++){
            if(box[i]!=="" && box[i]===box[i+3] && box[i+3]===box[i+6]){
                gameHandler(false);
                resultHandler(box[i]);
                return;
            }
        }
        if(box[0]!=="" && box[0]===box[4] && box[4]===box[8]){
            gameHandler(false);
            resultHandler(box[0]);
            return;
        }
        if(box[2]!=="" && box[2]===box[4] && box[4]===box[6]){
            gameHandler(false);
            resultHandler(box[2]);
            return;
        }
        let count = 0;
        for(let i=0;i<9;i++){
            if(box[i]==="X" || box[i]==="O"){
                count++;
            }
        }
        if(count===9){
            gameHandler(false);
            resultHandler("Draw");
        }
    }
    return <div id="ticTacToeGame">
        <div id="box1" className="box" onClick={()=>{keyHandler(0);checkWin()}} >{box[0]}</div>
        <div id="box2" className="box" onClick={()=>{keyHandler(1);checkWin()}} >{box[1]}</div>
        <div id="box3" className="box" onClick={()=>{keyHandler(2);checkWin()}} >{box[2]}</div>
        <div id="box4" className="box" onClick={()=>{keyHandler(3);checkWin()}} >{box[3]}</div>
        <div id="box5" className="box" onClick={()=>{keyHandler(4);checkWin()}} >{box[4]}</div>
        <div id="box6" className="box" onClick={()=>{keyHandler(5);checkWin()}} >{box[5]}</div>
        <div id="box7" className="box" onClick={()=>{keyHandler(6);checkWin()}} >{box[6]}</div>
        <div id="box8" className="box" onClick={()=>{keyHandler(7);checkWin()}} >{box[7]}</div>
        <div id="box9" className="box" onClick={()=>{keyHandler(8);checkWin()}} >{box[8]}</div>
    </div>
}

export default TicTacToeGame;