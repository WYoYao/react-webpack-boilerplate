import React,{Component} from 'react';
import {render} from 'react-dom';
import './index.css';

export default class ProductRow extends Component{
    render(){
        return(
            <tr className="borderColor">
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }
}