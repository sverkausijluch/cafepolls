import { connect } from 'react-redux';
import Question from '../Question.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const Question_wrap = connect(mapStateToProps("Question"), mapDispatchToProps("Question"))(Question)

export default Question_wrap