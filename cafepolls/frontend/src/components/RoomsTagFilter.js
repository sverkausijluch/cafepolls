import React from 'react'
import TagFilter_wrap from "./wraps/TagFilter_wrap"

class RoomsTagFilter extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
	  return (
		  <div className="col1">
			  <TagFilter_wrap type="rooms" />
		  </div>
	  )
	}
}

export default RoomsTagFilter
