import React,{Component} from 'react';
import {render} from 'react-dom';
import './index.css';

export default class SearchBar extends Component{
    handlerOnChange(e){
        this.props.handleChange(this.refs.filterText.value,this.refs.inStockOnly.checked)
    }
    render(){
        return(
            <div className="blue">
                <input type="text" ref="filterText" value={this.props.filterText} onChange={this.handlerOnChange.bind(this)} placeholder="Search..."/>
                <p><input type="checkbox" ref="inStockOnly" checked={this.props.inStockOnly}  onChange={this.handlerOnChange.bind(this)}  /><span className="widthFont">Only shwo products in stock</span></p>
            </div>
        )
    }
}