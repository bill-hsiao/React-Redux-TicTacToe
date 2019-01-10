import React, { Fragment } from 'react';
import Cell from './Cell';
import './Game.css';

function Game(props) {
  const cells = props.cells.map((val, index) => {
    return (
      <Cell key={val.i} onClick={val.onClick} val={val.val}/>
    )
  });
  return (
    split(cells, 3).map((val, idx) => {
      return (
        <div className={`Row${idx}`} key={idx}>{val}</div>
      )
    })
  )
}

function split(arr, num) {
  let temp, idx, newArr = [];
  for (let i = 0; i < num; i ++) {
    idx = i * num;
    temp = arr.slice().splice(idx, 3)
    newArr.push(temp)
  }
  return newArr
}



export default Game;
