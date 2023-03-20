import { connect } from 'react-redux';
import RoomHeader from '../RoomHeader.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const RoomHeader_wrap = connect(mapStateToProps("RoomHeader"), mapDispatchToProps("RoomHeader"))(RoomHeader)

export default RoomHeader_wrap