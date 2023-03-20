import { connect } from 'react-redux';
import RoomsTagFilter from '../RoomsTagFilter.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const RoomsTagFilter_wrap = connect(mapStateToProps("RoomsTagFilter"), mapDispatchToProps("RoomsTagFilter"))(RoomsTagFilter)

export default RoomsTagFilter_wrap