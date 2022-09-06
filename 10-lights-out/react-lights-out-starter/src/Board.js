import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  static defaultProps = {
    nrows: 5,
    ncols: 5
  }

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
      // board: [
      //   [false,false,false,false,false],
      //   [false,false,true,false,false],
      //   [false,true,true,true,false],
      //   [false,false,true,false,false],
      //   [false,false,false,false,false]
      // ]
    };
    this.flipCellsAround=this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    let {ncols, nrows} = this.props;

    for(let i=0;i<ncols;i++){
      let arr = [];
      for(let j=0;j<nrows;j++){
        let st = Boolean(Math.floor(Math.random()*2));
        arr.push(st);
      }
      board.push(arr);
    }
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(y,x);
    flipCell(y-1,x);
    flipCell(y+1,x);
    flipCell(y,x-1);
    flipCell(y,x+1);
    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = board.flat().every(x => !x); //x===false
    console.log(board)
    this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {
    // TODO
    return(
      <div>
        {
          // if the game is won, just show a winning msg & render nothing else
          this.state.hasWon && "YOU WIN"
        }   
        
        <div className="Board">
          {
             // TODO
             // make table board
            !this.state.hasWon && (
              this.state.board.map((arr,i) => 
                arr.map((st,j) => <Cell key={`${i}-${j}`} coord={`${i}-${j}`} isLit={st} flipCellsAroundMe={this.flipCellsAround}/>))
            )
          }
        </div>
          
        
      </div>
    );
  }
}


export default Board;
