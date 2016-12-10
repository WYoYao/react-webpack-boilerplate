import React,{Component} from 'react';
import {render} from 'react-dom';
import './index.css';
import SearchBar from './components/SearchBar/index.jsx';
import ProductTable from './components/ProductTable/index.jsx';

let data = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export default class FilterableProductTable extends Component{
    constructor(props) {
        super(props);
        this.state={
            filterText:'',
            inStockOnly:true,
            data
        }
    }
    handleChange(filterText,inStockOnly){
        this.setState({
            filterText,
            inStockOnly
        })
    }
    render(){
        return(
            <div className="lightyellow">
            <SearchBar handleChange={this.handleChange.bind(this)} {...this.state} />
            <ProductTable {...this.state}  />
            </div>
        )
    }
    
}