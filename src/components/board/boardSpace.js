// each space or tile on the board will have its logic stored here
import Paper from '@mui/material/Card';
import Grid from '@mui/material/Grid';

const BoardSpace = (props) => {
  const { index } = props;
  let { count } = props;

  const empty = () => (
    <div id={index} />
  )

  const getNeighborCount = () => {
    if (count === undefined || count === 0) {
      return "";
    } else {
      return count;
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
    } else {
      return empty();
    }
  }

  return (
    <Grid
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