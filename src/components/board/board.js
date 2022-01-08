// the board as a whole will sit here
import Grid from '@mui/material/Grid';
import BoardSpace from './boardSpace.js';

const Board = (props) => {
  // setSpaces = props.setSpaces
  const count = props.count;
  const validSpaces = [
    0,1,2,3,4,5,
    6,11,12,17,18,
    23,24,25,26,27,
    28,29,
  ];

  const getSpaces = () => {
    return(
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {new Array(count).fill(0).map((space, index) => {
          return(
            <BoardSpace
              key={index}
              index={index}
              valid={validSpaces.includes(index)}
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
        height: "750px",
        backgroundColor: "lightgray"
      }}
    >
      {getSpaces()}
    </div>
  )
}

export default Board;