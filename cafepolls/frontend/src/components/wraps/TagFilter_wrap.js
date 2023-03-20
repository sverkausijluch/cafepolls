import { connect } from 'react-redux';
import TagFilter from '../TagFilter.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const TagFilter_wrap = connect(mapStateToProps("TagFilter"), mapDispatchToProps("TagFilter"))(TagFilter)

export default TagFilter_wrap