import { useState, useEffect } from 'react';
import Dice from './dice.js';

const DiceController = (props) => {
  const playerActive = props.playerActive;
  const setPlayerActive = props.setPlayerActive;
  return (
    <Dice start={true} start={!playerActive} setPlayerActive={setPlayerActive} setCount={props.setCount}/>
  )
}

export default DiceController;