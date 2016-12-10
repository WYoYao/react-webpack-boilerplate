import React,{Component} from 'react';
import {render} from 'react-dom';

export default class CommentForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            author:'',
            text:'',
        }
    }
    handleAuthorChange(e){
        this.setState({author: e.target.value}); 
    }
    handleTextChange(e){
        this.setState({text: e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        let author=this.state.author.trim();
        let text=this.state.text.trim();
        if(!author || !text){
            return;
        }
        this.setState({
            author:'',
            text:'',
        })
    }
    render(){
        return(
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h2>{this.state.author}</h2>
                    <h2>{this.state.text}</h2>
                    <input type="text" placeholder="Say Somethine" value={this.state.text} onChange={this.handleTextChange.bind(this)}/>
                    <input type="text" placeholder="Author" value={this.state.author} onChange={this.handleAuthorChange.bind(this)}/>
                    <input type="submit" value="post"/>
                </form>
            )
    }
}
