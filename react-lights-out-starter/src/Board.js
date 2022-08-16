import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


class Board extends Component {
  static defaultProps = {
    nRows: 6,
    nCols: 6,
    chanceLightStartsOn: .5
  }
  
  constructor(props) {
    super(props);

    this.state = {
      board: this.createBoard(),
      hasWon: false
    }

    this.flipCellsAround = this.flipCellsAround.bind(this);
    this.restartBoard = this.restartBoard.bind(this);
  }

  intializeCell(){
    // I think I really just found a way to make something true X amount of times... just add that probability P(true) to the random() generator which goes 0-1. No way...
    // This seems to only work for binary situations though... I think.
    return Math.floor(Math.random() + this.props.chanceLightStartsOn);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    // Initialize 2D array of 0s representing unlit cells, and then go in and generate lit up cells, depending on the default prop probability.
    // I would initialize a blank 2D array, but for some reason, iterating through that causes weird issues.
    // I found out that fill() fills each index of a given array with some given value. In the case of setting value = [], each index of the given array
    // actually references the same value, []! Strange...
    let board = new Array(this.props.nRows)
      .fill(new Array(this.props.nCols).fill(0))
      .map((row) => {
        let newRow = row.map(() => this.intializeCell());

        return newRow;
      });

    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(row, col) {
    let {nCols, nRows} = this.props;

    function flipCell(newBoard, x, y) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
        newBoard[x][y] = !newBoard[x][y] + 0;
      }

      return newBoard;
    }

    this.setState((prevState) => {
      let newBoardState = {};
      let newBoard = prevState.board;

      newBoard = flipCell(newBoard, row, col);
      newBoard = flipCell(newBoard, row + 1, col);
      newBoard = flipCell(newBoard, row - 1, col);
      newBoard = flipCell(newBoard, row, col + 1);
      newBoard = flipCell(newBoard, row, col - 1);


      newBoardState.board = newBoard;

      if(this.checkCells(newBoard)){
        newBoardState.hasWon = true;
      }

      return newBoardState;
    })
  }

  //brute force check if all cells are lit
  checkCells(newBoard){
    let fullyLit = true;
    
    for(let row = 0; row < this.props.nRows; row++){
      for(let col = 0; col < this.props.nCols; col++){
        if (newBoard[row][col] === 0){
          
          fullyLit = false
          break;
        }
      }
    }

    // Could use .every() method in place of this bulky nested for loop
    // let fullyLit = newBoard.every((row) => row.every((cell) => !cell));
    
    return fullyLit;
  }

  restartBoard(){
    this.setState(()=>{
      return {
        board: this.createBoard(),
        hasWon: false
      }
    })
  }


  /** Render game board or winning message. */

  render() {

    // if the game is won, just show a winning msg & render nothing else
    if(this.state.hasWon){
      return (
        <div>
          <h2>Congratulations! You Won!</h2>
        </div>
      );
    }else{
      return (
        <div>
          <h1>Lights Out</h1>
          <table className="Board">
            <tbody>
              {
                this.state.board.map((row, rowIdx) => {
                  return (<tr>
                    {
                      row.map((cell, colIdx) => {
                        return <Cell isLit = {this.state.board[rowIdx][colIdx]} pos = {[rowIdx, colIdx]} flipCellsAroundMe = {this.flipCellsAround} />
                      })
                    }
                  </tr>)
                })
              }
            </tbody>
          </table>
          <button id="restart-board" onClick={this.restartBoard}>Restart</button>
        </div>
      );
    }
  }
}


export default Board;
