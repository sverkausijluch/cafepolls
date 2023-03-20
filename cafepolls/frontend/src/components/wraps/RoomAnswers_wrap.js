import { connect } from 'react-redux';
import RoomAnswers from '../RoomAnswers.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const RoomAnswers_wrap = connect(mapStateToProps("RoomAnswers"), mapDispatchToProps("RoomAnswers"))(RoomAnswers)

export default RoomAnswers_wrap