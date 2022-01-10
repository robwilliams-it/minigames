// the board as a whole will sit here
import Grid from '@mui/material/Grid';
import BoardSpace from './boardSpace.js';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { update } from '../../app/boardStore.js';

const Board = (props) => {
  const { count } = props;
  const dispatch = useDispatch();
  const board = useSelector((state)=> state.board.value )
  const [gameBoard, setGameBoard] = useState([]);

  useEffect(()=>{
    const populatedBoard = makeBoard();
    dispatch(update({ids: populatedBoard}));
  }, [])

  const makeBoard = () => {
    // generate board with all 0's
    const _board = [];
    for (let i = 0; i < count; i++){
      _board.push( new Array(6).fill(0) );
    }
    const bombArr = randomlyAddBombs(_board);
    updateNeighborBombCount(_board);
    return _board;
  }

  const randomlyAddBombs = (boardArr) => {
    const bArr = [];
    const max = count + 3;
    let bombCount = Math.floor(Math.random() * (max - count) + count);
    // get random position in the board
    // place the bomb
    for (let i = 0; i < bombCount; i++) {
      const x = Math.floor(Math.random() * 6);
      const y = Math.floor(Math.random() * count)
      boardArr[y][x] = "b";
      bArr.push([y,x])
    }
    return bArr;
  }

  const updateNeighborBombCount = (boardArr) => {
    for (let i = 0; i < boardArr.length; i++){
      for (let n = 0; n < boardArr[i].length; n++){
        // check neighbor
        // increment element
        // y = 0, x = 1
        const y = i;
        const x = n;
        if (boardArr[i][n] !== 'b') {
          const u = y - 1;
          const d = y + 1;
          const l = x - 1;
          const r = x + 1;
          if (boardArr[u] !== undefined){
            boardArr[i][n] = incrementSpace(boardArr[i][n], boardArr[u][l]);
            boardArr[i][n] = incrementSpace(boardArr[i][n], boardArr[u][x]);
            boardArr[i][n] = incrementSpace(boardArr[i][n], boardArr[u][r]);
          }
          if (boardArr[d] !== undefined){
            boardArr[i][n] = incrementSpace(boardArr[i][n], boardArr[d][l]);
            boardArr[i][n] = incrementSpace(boardArr[i][n], boardArr[d][x]);
            boardArr[i][n] = incrementSpace(boardArr[i][n], boardArr[d][r]);
          }
          boardArr[i][n] = incrementSpace(boardArr[i][n], boardArr[y][l]);
          boardArr[i][n] = incrementSpace(boardArr[i][n], boardArr[y][r]);
        } 
      }
    }
  }

  const incrementSpace = (space, neighbor) => {
    if (neighbor === 'b') {
      return space + 1;
    } 
    return space;
  }

  
  // setSpaces = props.setSpaces

  const getSpaces = () => {
    const getY = (flatIndex) => {
      return Math.floor(flatIndex / 6);
    }

    const getX = (flatIndex) => {
      return Math.floor(flatIndex % 6);
    }

    const getValue = (yAxis, xAxis) => {
      if (board.ids[yAxis] === undefined) {
        return 0;
      }
      return board.ids[yAxis][xAxis];
    }

    console.log(board);

    return(
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {new Array(count * 6).fill(0).map((space, index) => {
          const y = getY(index);
          const x = getX(index);
          const value = getValue(y, x);
          return(
            <BoardSpace
              key={index}
              index={index}
              // valid={validSpaces.includes(index)}
              valid = {true}
              // value = {board[x][y]}
              value={value}
              y = {y}
              x = {x}
            />
          )
        })}
      </Grid>
    )
  }

  return (
    <div
      style={{
        width: "900px",
        backgroundColor: "lightgray"
      }}
    >
      {getSpaces()}
    </div>
  )
}

export default Board;