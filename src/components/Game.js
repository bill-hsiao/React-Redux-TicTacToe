import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { move } from '../redux/actions';
import Cell from './Cell';


class Game extends React.Component {
  clickButton = (index) => {
    this.props.onClick(index)
    console.log(this.props);
    console.log(index);
  }
  render() {
    console.log(this.props.game);
    const cells = this.props.game.map((val, i) => {
      return (
        <Cell key={i} onClick={()=>this.clickButton(i)} val={val}/>
      )
    })
    return (
      <Fragment>
        {cells}
      </Fragment>
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
)(Game);
