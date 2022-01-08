import Player from './player.js';
import React, { useState, useEffect } from 'react';
import Positions from './positions.js';

const PlayerController = (props) =>{
  const [playerPos, setPlayers] = useState(0);
  const [targetReached, setTargetReached] = useState(false);
  // const [playerPositions, setPlayerPostions] = useState([]);

  useEffect( ()=>{
    let p = playerPos;
    p += 1;
    p = p >= Positions.length - 1 ? p - Positions.length -1 : p;
    // setTimeout(() => {
    //   setPlayers(p);
    // }, 1000);
  }, [playerPos]);

  useEffect(()=>{
    if (targetReached) {
      console.log('made it');
      // setTimeout(() => {
      //   setPlayers(0);
      // }, 1000);
    }
  },[targetReached]);

  useEffect(()=>{
    let i = props.count + playerPos;
    let n = Positions.length;
    i = i >= n ? i - n : i;
    props.setPlayerActive(true);
    setPlayers(i);
  },[props.count]);

  return (
    <Player position={playerPos} setTargetReached={setTargetReached} setPlayerActive={props.setPlayerActive} playerActive={props.playerActive}/>
  )
}

export default PlayerController;