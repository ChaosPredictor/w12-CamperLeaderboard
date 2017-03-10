require('normalize.css/normalize.css');
require('styles/Main.css');

import React from 'react';
//import JsonTable from 'react-json-table'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var data = require('json!../data/alltime.json');
//import data from '../data/alltime.json';

//var items = [
//  { name: 'Louise', age: 27, color: 'red' },
//  { name: 'Margaret', age: 15, color: 'blue'},
//  { name: 'Lisa', age:34, color: 'yellow'}
//];

/*var products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }];*/

//console.log(data[0]);

/*var columns = [
		'username',
		'img',
		{key: 'alltime', label: 'All Time'},
		'recent',
		'lastUpdate'
];*/

class MainComponent extends React.Component {
  render() {
    return (
      <div className="main">
				<BootstrapTable data={data} striped hover condensed height='520' scrollTop={ 'Top' }>
					<TableHeaderColumn dataField='username' isKey>Product ID</TableHeaderColumn>
					<TableHeaderColumn dataField='alltime'>Product Name</TableHeaderColumn>
					<TableHeaderColumn dataField='recent'>Product Price</TableHeaderColumn>
				</BootstrapTable>
      </div>
    );
  }
}

export default MainComponent;
