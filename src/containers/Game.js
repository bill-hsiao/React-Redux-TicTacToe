// MessageSending.container.js
import { connect } from 'react-redux';
import { move } from '../redux/actions';
import Game from '../components/Game';

const mapDispatchToProps = {
 move,
};

export default connect(null, mapDispatchToProps)(Game);

// MessageSending.js
// ...
// this.props.sendMessage(message);
// ...
