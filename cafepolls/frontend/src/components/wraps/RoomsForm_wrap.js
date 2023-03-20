import { connect } from 'react-redux'
import RoomsForm from '../forms/RoomsForm.js'
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const RoomsForm_wrap = connect(mapStateToProps("RoomsForm"), mapDispatchToProps("RoomsForm"))(RoomsForm)

export default RoomsForm_wrap