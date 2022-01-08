import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

// TODO: pass a function from the app to this which tell it to roll when player stops
// TODO: pass function from the app to this which tell the player the number of moves to go
const Dice = (props) => {
  const [num, setNum] = useState(0);
  const [roll, setRollActive] = useState(props.start || false);
  const [rNum, setRNum] = useState(0);

  const rollDice = () => {
    if (props.start || roll) {
      let n = Math.floor(Math.random() * 6) + 1;
      while (n === num) {
        n = Math.floor(Math.random() * 6) + 1;
      }
      setNum( n );
    }
  }

  useEffect(()=> {
    if(props.start) {
      setRollActive(true);
    }
  }, [props.start]);

  useEffect(()=> {
    setTimeout(() => {
      if( roll ) {
        rollDice();
      }
    }, 600);
  }, [roll, num]);

  useEffect(()=>{
    if(!roll){
      setRNum(num);
    }
  },[num]);

  useEffect(()=>{
    // console.log(rNum);
    props.setCount(rNum);
  },[rNum]);

  useEffect (()=>{
    if (!roll) {
      // console.log(num);
      // send back the latest num
    }
  }, [roll])

  const handleClick = (event) => {
    // console.log('stop');
    // pass back a number
    setRollActive(!roll);
    // TODO:may need to use below instead of above
    // setPlayerActive(false);
  }

  return (
    <div
      style={{
        position: "absolute"
      }}
    >
      <div
        style={{
          position:"relative",
          left: `395px`,
          top: `320px`
        }}
      >
        <Button
          onClick={handleClick}
          variant="outlined"
          sx={{
            borderColor: 'white',
            color: 'white',
            fontWeight: 'bold',
            width: 110,
            height: 110,
            // bgcolor: brown[500],
          }}
        >
          <Typography variant="h1" component="div" textAlign='center'>
            {num}
          </Typography>
        </Button>
      </div>
    </div>
  )
}

export default Dice;