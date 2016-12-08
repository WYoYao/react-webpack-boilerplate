import React,{Component} from 'react';
import { render } from 'react-dom';
// import { App } from './containers';
import {FilterableProductTable} from './components';



let root = document.getElementById('app');
render( <FilterableProductTable />, root );
