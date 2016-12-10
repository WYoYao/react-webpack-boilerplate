import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

export default class ProductCategoryRow extends Component {
    render() {
        return (
            <tr>
                <td colSpan="2" className="lightgreen">
                    <h4>{this.props.category}</h4>
                </td>
            </tr>
        )
    }
}