import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Agnostic Game com seu primeiro component contruido com React!</p>;
  }
}

render(<App/>, document.getElementById('content'));