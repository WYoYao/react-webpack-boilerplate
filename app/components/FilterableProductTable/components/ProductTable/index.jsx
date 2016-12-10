import React,{Component} from 'react';
import {render} from 'react-dom';
import './index.css';

import ProductRow from '../ProductRow/index.jsx';
import ProductCategoryRow from '../ProductCategoryRow/index.jsx';

export default class ProductTable extends Component{
    render(){
        if(!this.props.inStockOnly){
            return(<div></div>)
        }

        let rows=[];
        let category=null;
        this.props.data.
        sort(item=>item.category).
        filter(item=>item.name.indexOf(this.props.filterText)!=-1).
        reduce((content,item)=>{
            if(category!=item.category){
                category=item.category;
                content.push(<ProductCategoryRow category={category} key={category}/>);
            }
            content.push(<ProductRow price={item.price} name={item.name} key={item.name} />);
            return content;
        },rows);

        return(
            <div className="lightgreen">
                <table>
                    <thead>
                        <tr>
                            <td><h4>Name</h4></td>
                            <td><h4>Price</h4></td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}