import { connect } from 'react-redux';
import Profile from '../Profile.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const Profile_wrap = connect(mapStateToProps("Profile"), mapDispatchToProps("Profile"))(Profile)

export default Profile_wrap