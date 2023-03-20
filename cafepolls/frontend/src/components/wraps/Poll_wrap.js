import { connect } from 'react-redux';
import Poll from '../Poll.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const Poll_wrap = connect(mapStateToProps("Poll"), mapDispatchToProps("Poll"))(Poll)

export default Poll_wrap