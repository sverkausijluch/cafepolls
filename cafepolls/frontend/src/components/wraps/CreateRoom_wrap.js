import { connect } from 'react-redux';
import CreateRoom from '../windows/CreateRoom.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const CreateRoom_wrap = connect(mapStateToProps("CreateRoom"), mapDispatchToProps("CreateRoom"))(CreateRoom)

export default CreateRoom_wrap