import { connect } from 'react-redux';
import PollsFilter from '../PollsFilter.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const PollsFilter_wrap = connect(mapStateToProps("PollsFilter"), mapDispatchToProps("PollsFilter"))(PollsFilter)

export default PollsFilter_wrap