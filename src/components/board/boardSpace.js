// each space or tile on the board will have its logic stored here
import Paper from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../app/boardStore.js';

const BoardSpace = (props) => {
  const board = useSelector((state)=> state.board.value )
  const dispatch = useDispatch();
  const [state, setState] = useState({hidden: true});
  const { index } = props;
  let { value } = props;
  
  const handleClick = () => {
    if (state.hidden) {
      setState({hidden: false});
      
      // get board state
      // find element in the board state
      // remove element from the board state
      const boardIds = [...board.ids];
      var i = boardIds.indexOf(index);
      if (i !== -1) {
        boardIds.splice(i, 1);
      } else {
        // console.log(index);
      }
      dispatch(update({ids: boardIds}));
      // call function to remove item from 
      // collection of "safe" tiles
    }
  }

  const getNeighborCount = () => {
    if (state.hidden){
      return "";
    }else{

      if (value === undefined || value === 0) {
        return "";
      } else {
        return value;
      }

    } 
  }

  const full = () => (
    <Paper
      elevation={0}
      id={`sub ${index}`}
        style={{
        boxSizing: "border-box",
        height:"125px",
        width:"125px",
      }}
    >
      <Grid
        container
        justifyContent= "center"
        alignItems= "center"
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Grid item>
          {getNeighborCount()}
        </Grid>
      </Grid>
    </Paper>
  )

  const getSpace = () => {
    if(props.valid) {
      return full();
    } 
  }

  return (
    <Grid
      onClick = {handleClick}
      container
      id={props.index}
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{
        boxSizing: "border-box",
        height:"150px",
        width:"150px",
      }}
    >
      {getSpace()}
    </Grid>
  )
}

export default BoardSpace;