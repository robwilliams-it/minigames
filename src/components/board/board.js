// the board as a whole will sit here
import Grid from '@mui/material/Grid';
import BoardSpace from './boardSpace.js';

const Board = (props) => {
  const { count } = props;
  // setSpaces = props.setSpaces

  const getSpaces = () => {
    return(
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {new Array(count * 6).fill(0).map((space, index) => {
          return(
            <BoardSpace
              key={index}
              index={index}
              // valid={validSpaces.includes(index)}
              valid = {true}
              count = {1}
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