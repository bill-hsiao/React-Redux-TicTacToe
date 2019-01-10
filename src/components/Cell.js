import React from 'react';

function Cell (props) {
  // const index = props.index
  return (
    <button onClick={props.onClick}>{props.val}</button>
  )
}

export default Cell;
