import Header from './partial/Header';
import Sidebar from './partial/Sidebar';
import React, { Component, Fragment } from 'react';

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header>

        </Header>

        <Sidebar>

        </Sidebar>
      </div>
    );
  }
}

export default App;
