import { connect } from 'react-redux';
import CiteHeader from '../CiteHeader.js';
import mapStateToProps from '../../store/mapStateToProps.js'
import mapDispatchToProps from '../../store/mapDispatchToProps.js'

const CiteHeader_wrap = connect(mapStateToProps("CiteHeader"), mapDispatchToProps("CiteHeader"))(CiteHeader)

export default CiteHeader_wrap