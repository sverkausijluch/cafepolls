import React from 'react'
import './editor.css'
import ColorsBlock from '../elements/ColorsBlock'
import {smiles} from '../../dictionaries/smiles'

export function specialtagstohtml(text) {
    let html = text.replace(new RegExp('&lt;i&gt;([^`]+?)&lt;/i&gt;','g'),'<i>$1</i>')
    html = html.replace(new RegExp('&lt;i&gt;&lt;/i&gt;','g'),'')
    html = html.replace(new RegExp('&lt;b&gt;([^`]+?)&lt;/b&gt;','g'),'<b>$1</b>')
    html = html.replace(new RegExp('&lt;b&gt;&lt;/b&gt;','g'),'')
    html = html.replace(new RegExp('&lt;div style="([^`]+?)"&gt;([^`]+?)&lt;/div&gt;','g'),'<div style="$1">$2</div>')
    html = html.replace(new RegExp('&lt;div style="([^`]+?)"&gt;&lt;/div&gt;','g'),'<div style="$1"></div>')
    html = html.replace(new RegExp('&lt;span style="([^`]+?)"&gt;([^`]+?)&lt;/span&gt;','g'),'<span style="$1">$2</span>')
    html = html.replace(new RegExp('&lt;span style="([^`]+?)"&gt;&lt;/span&gt;','g'),'')
    html = html.replace(new RegExp('&lt;img src="/media/smiles/([^`]+?).png" class="smile"','g'),'<img src="/media/smiles/$1.png" class="smile">')
    return html
}
class TextEditor extends React.Component {
	constructor(props) {
		super(props)
		this.setText = this.setText.bind(this)
		this.setSelection = this.setSelection.bind(this)
		this.addSmile = this.addSmile.bind(this)
		this.makeCursive = this.makeCursive.bind(this)
		this.makeBold = this.makeBold.bind(this)
		this.updateEditor = this.updateEditor.bind(this)
		this.addBlock1 = this.addBlock1.bind(this)
		this.addBlock2 = this.addBlock2.bind(this)
		this.addBlock3 = this.addBlock3.bind(this)
		this.openDesignWin = this.openDesignWin.bind(this)
		this.selectColor = this.selectColor.bind(this)
		this.onKeyDown = this.onKeyDown.bind(this)
		this.onMouse = this.onMouse.bind(this)
		this.state = {
			design_win_status: 'hide',
		}
	}
    onMouse = (e) => {
        e.preventDefault()
    }
    openDesignWin = (e) => {
        let win_type = e.target.getAttribute('data-type')
        if (this.state.design_win_status==win_type) {
            this.setState({
                design_win_status: 'hide',
            })
        } else {
            this.setState({
                design_win_status: win_type,
            })
        }
    }
    selectColor = (e) => {
        let color = e.target.getAttribute('data-colorcode')
        let div_textarea = document.getElementById('editor_textarea')
        div_textarea.focus()
        let selection = window.getSelection(),
        range = selection.getRangeAt(0)
        let temp = document.createElement('div')
        temp.textContent = `<span style="color:${color}"></span>`
        range.insertNode(temp.firstChild)
        selection.collapseToEnd()
        this.updateEditor()
        this.setState({
            design_win_status: 'hide'
        })
    }
    setText = (e) => {
        this.updateEditor()
    }
    addSmile = (e) => {
        let img = e.target.cloneNode(true)
        let div_textarea = document.getElementById('editor_textarea')
        div_textarea.focus()
        let selection = window.getSelection(),
        range = selection.getRangeAt(0),
        temp = document.createElement('div'),
        insertion = document.createDocumentFragment()
        temp.appendChild(img)
        while (temp.firstChild) {
			insertion.appendChild(temp.firstChild)
		}
        range.deleteContents()
        range.insertNode(insertion)
        selection.collapseToEnd()
        this.updateEditor()
    }
    setSelection = (e) => {

    }
    makeCursive = (e) => {
        let div_textarea = document.getElementById('editor_textarea')
        div_textarea.focus()
        let selection = window.getSelection(),
        range = selection.getRangeAt(0)
        let temp = document.createElement('div');
        temp.textContent = '<i></i>';
        range.insertNode(temp.firstChild);
        selection.collapseToEnd()
    }
    makeBold = (e) => {
        let div_textarea = document.getElementById('editor_textarea')
        div_textarea.focus()
        let selection = window.getSelection(),
        range = selection.getRangeAt(0)
        let temp = document.createElement('div');
        temp.textContent = '<b></b>';
        range.insertNode(temp.firstChild);
        selection.collapseToEnd()
    }
    addBlock1 = (e) => {
        let div_textarea = document.getElementById('editor_textarea')
        div_textarea.focus()
        let selection = window.getSelection(),
        range = selection.getRangeAt(0)
        let temp = document.createElement('div')
        temp.textContent = '<div style="border-left: 3px solid rgb(66,178,247);"></div>'
        range.insertNode(temp.firstChild)
        selection.collapseToEnd()
        this.updateEditor()
    }
    addBlock2 = (e) => {
        let div_textarea = document.getElementById('editor_textarea')
        div_textarea.focus()
        let selection = window.getSelection(),
        range = selection.getRangeAt(0)
        let temp = document.createElement('div')
        temp.textContent = '<div style="background: pink;"></div>'
        range.insertNode(temp.firstChild)
        selection.collapseToEnd()
        this.updateEditor()
    }
    addBlock3 = (e) => {
        let div_textarea = document.getElementById('editor_textarea')
        div_textarea.focus()
        let selection = window.getSelection(),
        range = selection.getRangeAt(0)
        let temp = document.createElement('div')
        temp.textContent = '<div style="border-color: green;"></div>'
        range.insertNode(temp.firstChild)
        selection.collapseToEnd()
        this.updateEditor()
    }
    updateEditor = () => {
        let div_textarea = document.getElementById('editor_textarea')
        let textarea = document.getElementById(this.props.content+'_textarea')
        let showed = document.getElementById('showed_msg')
        let redactor_html = div_textarea.innerHTML
        textarea.value=redactor_html
        let html = specialtagstohtml(redactor_html)
        showed.innerHTML=html
    }
    onKeyDown = (e) => {
        if (e.keyCode === 13) {
          document.execCommand('insertHTML', false, '<br><br>')
          return false;
        }
    }
	render() {
        return (
            <>
                <div className="input-header">
                    <div className={this.state.design_win_status=='hide'?'hide':'redactor-design-win'}>
                        {(() => {
                            if (this.state.design_win_status==='colors') {
                              return <ColorsBlock selectColor={this.selectColor} />
                            } else if (this.state.design_win_status==='blocks') {
                                return(
                                    <ul>
                                        <li onClick={this.addBlock1}>с полоской</li>
                                        <li onClick={this.addBlock2}>с фоном</li>
                                        <li onClick={this.addBlock3}>с границей</li>
                                    </ul>
                                )
                            }
                          })()}
                    </div>
                    <ul>
                        <li onClick={this.makeCursive} onMouseDown={this.onMouse}><i className="el-icon-edit"></i></li>
                        <li onClick={this.makeBold} onMouseDown={this.onMouse}><i className="">B</i></li>
                        <li><i className="el-icon-menu" onClick={this.openDesignWin} data-type="blocks"></i></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/3953/3953405.png"  onClick={this.openDesignWin} data-type="colors" /></li>
                    </ul>
                </div>
                <div className="textarea-block">
                    <div contentEditable defaultValue="Введите текст" onInput={this.setText} className="editor-textarea" id="editor_textarea" onKeyDown={this.onKeyDown}></div>
                    <div className="smiles-block">
                        <ul>
                            {smiles.map((smile, index) => {
                                return (
                                    <li key={index}><img src={`/media/smiles/${smile.filename}`} onClick={this.addSmile} className="smile" /></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="showed-msg" id="showed_msg"></div>
            </>
        )
    }
}
export default TextEditor
