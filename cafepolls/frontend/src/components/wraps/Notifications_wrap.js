import { connect } from 'react-redux'
import Notifications from '../elements/Notifications.js'
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const Notifications_wrap = connect(mapStateToProps("Notifications"), mapDispatchToProps("Notifications"))(Notifications)

export default Notifications_wrap