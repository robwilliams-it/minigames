// each space or tile on the board will have its logic stored here
import Paper from '@mui/material/Card';
import Grid from '@mui/material/Grid';

const BoardSpace = (props) => {
  const empty = () => (
    <div
      id={props.index}
    />
  )

  const full = () => (
    <Paper
      elevation={6}
      id={`sub ${props.index}`}
        style={{
        boxSizing: "border-box",
        height:"125px",
        width:"125px",
      }}
    />
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