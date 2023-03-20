import { connect } from 'react-redux';
import Comments from '../Comments.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const Comments_wrap = connect(mapStateToProps("Comments"), mapDispatchToProps("Comments"))(Comments)

export default Comments_wrap