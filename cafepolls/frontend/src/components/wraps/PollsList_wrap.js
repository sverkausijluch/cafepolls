import { connect } from 'react-redux';
import PollsList from '../PollsList.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const PollsList_wrap = connect(mapStateToProps("PollsList"), mapDispatchToProps("PollsList"))(PollsList)

export default PollsList_wrap