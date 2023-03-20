import { connect } from 'react-redux';
import Thanks from '../elements/Thanks.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const Thanks_wrap = connect(mapStateToProps("Thanks"), mapDispatchToProps("Thanks"))(Thanks)

export default Thanks_wrap