require('normalize.css/normalize.css');
require('styles/Main.css');

import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

//var data = require('json!../data/alltime.json');
//var data = require('json!..https://fcctop100.herokuapp.com/api/fccusers/top/recent');
//var data;



function imageFormatter(cell, row){
	return (<img style={{width:50}} src={cell}/>)
}

function imageName(cell, row) {
	return (<div className="imageNameDiv"><img className="inDiv" style={{width:50}} src={row.img}/><p className="inDiv">{row.username}</p></div>) 
}


function indexN(cell, row, enumObject, index) {
	return (<div>{index+1}</div>) 
}


//$.getJSON("https://fcctop100.herokuapp.com/api/fccusers/top/recent", function(json) {
//	data = json; // this will show the info it in firebug console
//	console.log(data);
//});

class MainComponent extends React.Component {
	
	render() {
    return (
      <div className="main">
				<BootstrapTable data={this.props.data} striped hover condensed height='520' scrollTop={ 'Top' }>
					<TableHeaderColumn className="indexColumn" width="30"  dataField="img" dataFormat={indexN}>#</TableHeaderColumn>
		      <TableHeaderColumn dataField="img" dataFormat={imageName} isKey={true}>Camper user</TableHeaderColumn>
					<TableHeaderColumn dataField='alltime' dataSort={ true }>All time points</TableHeaderColumn>
					<TableHeaderColumn dataField='recent' dataSort={ true }>Points in Last 30 days</TableHeaderColumn>
				</BootstrapTable>
      </div>
    );
  }
}

export default MainComponent;
