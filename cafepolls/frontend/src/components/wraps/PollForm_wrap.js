import { connect } from 'react-redux'
import PollForm from '../forms/PollForm.js'
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const PollForm_wrap = connect(mapStateToProps("PollForm"), mapDispatchToProps("PollForm"))(PollForm)

export default PollForm_wrap