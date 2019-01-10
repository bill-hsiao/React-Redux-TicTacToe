import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../redux/actions';
import ResetButton from '../components/ResetButton';

class ResetGame extends React.Component {
  clickButton = () => {
    this.props.onClick()
  }
  render() {
    return (
      <ResetButton clickButton={()=> this.clickButton()}/>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(reset())
})

export default connect(
  null, mapDispatchToProps
)(ResetGame);
