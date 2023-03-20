import { connect } from 'react-redux';
import CreatePoll from '../windows/CreatePoll.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const CreatePoll_wrap = connect(mapStateToProps("CreatePoll"), mapDispatchToProps("CreatePoll"))(CreatePoll)

export default CreatePoll_wrap