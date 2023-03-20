import { connect } from 'react-redux';
import Main from '../Main.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const Main_wrap = connect(mapStateToProps("Main"), mapDispatchToProps("Main"))(Main)

export default Main_wrap