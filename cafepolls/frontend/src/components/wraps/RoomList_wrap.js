import { connect } from 'react-redux';
import RoomList from '../RoomList.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const RoomList_wrap = connect(mapStateToProps("RoomList"), mapDispatchToProps("RoomList"))(RoomList)

export default RoomList_wrap