import React,{Component} from 'react';
import { render } from 'react-dom';
import { App } from './containers';
console.log(456);
console.log(123);

let root = document.getElementById('app');
render( <App />, root );
