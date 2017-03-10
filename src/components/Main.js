require('normalize.css/normalize.css');
require('styles/Main.css');

import React from 'react';
import JsonTable from 'react-json-table'

var data = require('json!../data/alltime.json');
//import data from '../data/alltime.json';

var items = [
  { name: 'Louise', age: 27, color: 'red' },
  { name: 'Margaret', age: 15, color: 'blue'},
  { name: 'Lisa', age:34, color: 'yellow'}
];

class MainComponent extends React.Component {
  render() {
    return (
      <div className="main">
				<JsonTable rows={ data } />
      </div>
    );
  }
}

export default MainComponent;
