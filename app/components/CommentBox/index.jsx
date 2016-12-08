import React,{Component} from 'react';
import { render } from 'react-dom';
import Remarkable from 'Remarkable';

let data=[{id: 1, author: "Pete Hunt", text: "This is one comment"},
          {id: 2, author: "Jordan Walke", text: "This is *another* comment"}];

class CommentBox extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[{id: 1, author: "Pete Hunt", text: "This is one comment"},{id: 2, author: "Jordan Walke", text: "This is *another* comment"}]
        }
    }
    componentDidMount() {
        setTimeout(()=> {
            this.setState({
                data:[{id: 1, author: "Pete Hunt", text: "This is one comment"},{id: 2, author: "Jordan Walke", text: "This is *another* comment"},,{id: 3, author: "Jordan Walke", text: "This is *another* comment"},,{id: 4, author: "Jordan Walke", text: "This is *another* comment"},{id:5, author: "Jordan Walke", text: "This is *another* comment"}]
            })
        }, 5000);
    }
    
    render(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
}

class CommentList extends Component{
    render(){
        let commonts=this.props.data.map(item=>{
            return (
                <Comment author={item.author} key={item.id}>
                    {item.text}
                </Comment>
            )
        })
        return (
        <div className="commentList">
            {commonts}
        </div>
        );
    }
}

class CommentForm extends Component{
    render() {
        return (
        <div className="commentForm">
            Hello, world! I am a CommentForm.
        </div>
        );
    }
}

class Comment extends Component{
    rawMarkup(){
        const md=new Remarkable();
        const rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    }
    render() {
        return (
        <div className="comment">
            <h2 className="commentAuthor">
            {this.props.author}
            </h2>
            <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
        );
  }
}

export default CommentBox;