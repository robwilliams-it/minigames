import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from 'react';
// import { brown } from '@mui/material/colors';
import Positions from './positions.js';
// import Zoom from '@mui/material/Slide';


const Player = (props) => {
  const [target, setTarget] = useState (props.position || 0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [position, setPosition] = useState(Positions[currentPosition]);
  // const [gameOn, setGameOn] = useState(false);

// Positions.props.posIndex

  const incrementPosition = () => {
    // console.log('called');
    if (currentPosition !== target) {
      let i = currentPosition + 1;
      i = i >= Positions.length ? 0: i;
      setPosition(Positions[i]);
      setCurrentPosition(i);
    }
  }

  useEffect(()=>{
    if (props.position !== undefined) {
      setTarget(props.position);
      // incrementPosition();
    }
  } ,[props.position]);

  // useEffect(()=>{
  //   console.log('counted', props.count);
  //   console.log
  // },[props.count]);

  useEffect(()=>{
    if (currentPosition !== target) {
      setTimeout(() => {
        incrementPosition();
      }, 500);
    } else {
      // make the call that will do the DICE THING HERE
      console.log('done');
      props.setPlayerActive(false);
      // props.setTargetReached(true);
      // setGameOn(true);
    }
  } ,[currentPosition, target]);

  // props.position

  return (
    <div
      style={{
        position: "absolute"
      }}
    >
      <div
        style={{
          position:"relative",
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://d29fhpw069ctt2.cloudfront.net/icon/image/85062/preview.svg"
          sx={{
            width: 40,
            height: 40,
            // bgcolor: brown[500],
          }}
        />
      </div>
    </div>
  )
}

export default Player;