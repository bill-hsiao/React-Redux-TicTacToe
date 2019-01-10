import React from 'react';

function Cell (props) {
  return (
    <button onClick={props.onClick}>{props.val}</button>
  )
}

export default Cell;
