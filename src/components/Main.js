require('normalize.css/normalize.css');
require('styles/Main.css');

import React from 'react';
import JsonTable from 'react-json-table'
var items = [
  { name: 'Louise', age: 27, color: 'red' },
  { name: 'Margaret', age: 15, color: 'blue'},
  { name: 'Lisa', age:34, color: 'yellow'}
];

class MainComponent extends React.Component {
  render() {
    return (
      <div className="main">
				<JsonTable rows={ items } />
      </div>
    );
  }
}

export default MainComponent;
