import React, { Fragment } from 'react';
import Cell from './Cell';

function Game(props) {
  return (
    props.cells.map((val, index) => {
      return (
        <Cell key={val.i} onClick={val.onClick} val={val.val}/>
      )
    })
  )
}


export default Game;
