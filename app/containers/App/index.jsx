import React, { Component } from 'react';
import { MyComponent } from '../../components';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyComponent />
        <p>
          React 脚手架
        </p>
      </div>
    );
  }
}

export default App;