import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { move } from '../redux/actions';
import Game from '../components/Game';
// import Cell from './Cell';


// <Cell key={i} onClick={()=>this.clickButton(i)} val={val}/>

class TicTacToe extends React.Component {
  clickButton = (index) => {
    this.props.onClick(index)
  }
  render() {
    const cellList = this.props.game.map((val, i) => {
      return (
        {
          key: i, onClick: ()=>this.clickButton(i), val: val
        }
      )
    })
    return (
      <Game cells={cellList} />
    )
  }
}

const mapStateToProps = state => ({
  game: state.game,
})
const mapDispatchToProps = dispatch => ({
  onClick: (index) => dispatch(move(index))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicTacToe);
