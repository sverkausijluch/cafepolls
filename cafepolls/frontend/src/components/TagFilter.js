import React from 'react'
import axios from "axios"

class TagFilter extends React.Component {
	constructor(props) {
		super(props)
		this.selectTag = this.selectTag.bind(this)
		this.removeTag = this.removeTag.bind(this)
		this.tagSearch = this.tagSearch.bind(this)
		this.state = {
			searched_tags: [],
			popular_tags: [],
		}
	}
	componentDidMount() {
		if(this.props.type=="rooms") {
			axios.get('http://'+window.location.host+'/api/popular-tags').then(tags => {
				this.setState({
					popular_tags: tags.data.tags
				})
			})
		}
	}
	selectTag = (e) => {
		let tag_id = e.target.getAttribute('data-id')
		let tags_block = document.getElementById('selected_'+this.props.type+'_tags')
		let tag_li = document.createElement('li')
		tag_li.setAttribute('data-id',tag_id)
		let textNode = document.createTextNode(e.target.textContent)
		tag_li.append(textNode)
        let icon = document.createElement('i')
		icon.classList.add('el-icon-minus')
		icon.classList.add('remove-tag')
		icon.addEventListener("click", this.removeTag);
		tag_li.append(icon)
        tags_block.append(tag_li)
        if(this.props.type == 'rooms') {
			if(this.props.room_tags.indexOf(tag_id ) == -1) { //почему не работает проверка
				this.props.set_room_tag(tag_id)
			}
		} else if (this.props.type == 'polls') {
			this.props.set_tag(tag_id) //нужна проверка на повторы
		} else if (this.props.type == 'form') {
			if(this.props.form_type == 'poll') {
				this.props.set_poll_form_tag(tag_id)
			}
		}

	}
	removeTag = (e) => {
		let tag_id = e.target.parentNode.getAttribute('data-id')
		e.target.parentNode.remove()
        if(this.props.type == 'rooms') {
			let selected_tags = this.props.room_tags
			let new_tags = selected_tags.filter(tag => tag !== tag_id)
			this.props.set_room_tags(new_tags)
		} else if (this.props.type == 'polls') {
			let selected_tags = this.props.tags
			let new_tags = selected_tags.filter(tag => tag !== tag_id)
			this.props.set_tags(new_tags)
		}
	}
	tagSearch = (e) => {
        let tags_block = document.getElementById(this.props.type+'_tags_block')
               if(tags_block.classList.contains('hide')) {
                   tags_block.classList.remove('hide')
			   }
			   if(e.target.value == '' || e.target.value == ' ') {
                   tags_block.classList.add('hide')
               } else {
                   let set_tag_list = (tags) => {
						this.setState({
							searched_tags: tags
						})
                   }
                    let data = {search_str: e.target.value}
                        $.ajax({
                                    type: 'post',
                                    url: '../api/room-tags-filter',
                                    cache: false,
                                    data: data,
                                    success: function(data) {
                                        set_tag_list(data.tags)
                                    },
                                    error: function(xhr, status, error){
                                        console.log(JSON.parse(xhr.responseText))
                                    }
                        })
			   }
    }
	render() {
	  return (
		  <>
            <div className="tag-search-block">
				<input className={this.props.type=="form" ? ("tags-select-input") : ("tag-search")} placeholder="Выберите тэг" onChange= {this.tagSearch} />
				<div className="search-result hide tags-list" id={this.props.type+"_tags_block"} >
					<ul className="selected-tags">
						{this.state.searched_tags.map((tag, index) => {
							return (
								<li key={index} data-id={tag.id} onClick={this.selectTag}>
									{tag.name}
								</li>
							)
						})}
					</ul>
				</div>
            	<ul id={"selected_"+this.props.type+"_tags"} className="selected-tags"></ul>
			</div>
			  {this.props.type === 'rooms' ? (
				  	<>
				  		<div className="border-line"></div>
						<div className="tags-block">
							<h3>Частые темы</h3>
							<ul>
								{this.state.popular_tags.map((tag, index) => {
									return (
										<li key={index} data-id={tag.id} onClick={this.selectTag}>
											{tag.name}
										</li>
									)
								})}
							</ul>
						</div>
					</>
				  ) : ("")
			  }
		  </>
	  )
	}
}

export default TagFilter
