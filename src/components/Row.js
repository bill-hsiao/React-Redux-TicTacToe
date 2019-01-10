import React from 'react';
import Cell from './Cell';

function Row (props) {
  return (
    <Cell key={props.i} onClick={()=>props.clickButton(i)} val={props.val}/>
  )
}

export default Row;
