import { connect } from 'react-redux';
import RoomsHeader from '../RoomsHeader.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const RoomsHeader_wrap = connect(mapStateToProps("RoomsHeader"), mapDispatchToProps("RoomsHeader"))(RoomsHeader)

export default RoomsHeader_wrap