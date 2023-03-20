import { connect } from 'react-redux';
import RoomForm from '../RoomForm.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const RoomForm_wrap = connect(mapStateToProps("RoomForm"), mapDispatchToProps("RoomForm"))(RoomForm)

export default RoomForm_wrap