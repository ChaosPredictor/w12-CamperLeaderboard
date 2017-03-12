require('normalize.css/normalize.css');
require('styles/Main.css');

import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var data = require('json!../data/alltime.json');

class MainComponent extends React.Component {
  render() {
    return (
      <div className="main">
				<BootstrapTable data={data} striped hover condensed height='520' scrollTop={ 'Top' }>
					<TableHeaderColumn dataField='username' isKey>Product ID</TableHeaderColumn>
					<TableHeaderColumn dataField='alltime' dataSort={ true }>All time</TableHeaderColumn>
					<TableHeaderColumn dataField='recent' dataSort={ true }>Last 30 days</TableHeaderColumn>
				</BootstrapTable>
      </div>
    );
  }
}

export default MainComponent;
