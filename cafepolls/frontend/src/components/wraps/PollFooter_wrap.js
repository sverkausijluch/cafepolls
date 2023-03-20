import { connect } from 'react-redux';
import PollFooter from '../PollFooter.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const PollFooter_wrap = connect(mapStateToProps("PollFooter"), mapDispatchToProps("PollFooter"))(PollFooter)

export default PollFooter_wrap