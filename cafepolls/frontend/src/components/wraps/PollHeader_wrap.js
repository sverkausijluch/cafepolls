import { connect } from 'react-redux'
import PollHeader from '../PollHeader.js'
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const PollHeader_wrap = connect(mapStateToProps("PollHeader"), mapDispatchToProps("PollHeader"))(PollHeader)

export default PollHeader_wrap