require('normalize.css/normalize.css');
require('styles/Main.css');

import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import $ from 'jquery';

function imageFormatter(cell, row){
	return (<img style={{width:50}} src={cell}/>)
}

function imageName(cell, row) {
	return (<div className="imageNameDiv"><img className="inDiv" style={{width:50}} src={row.img}/><p className="inDiv">{row.username}</p></div>) 
}

function indexN(cell, row, enumObject, index) {
	return (<div>{index+1}</div>) 
}

function myFunction() {
	alert ("for test")
}

var DATA = [{"username":"sjames1958gm","img":"https://avatars.githubusercontent.com/u/4639625?v=3","alltime":5810,"recent":384,"lastUpdate":"2017-03-11T03:22:18.809Z"}];

class MainComponent extends React.Component {
	
  constructor(props) {
    super(props);
		this.state = {
			sortName: undefined,
			sortOrder: undefined,
			sortBy: null,
			data: DATA
		};
		var self = this;
		$.ajax({
			url: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
			dataType: 'json',
			success: function( jsonData ) {
				console.log("load SUCCESS");
				self.setState({
					data: jsonData
		    });
			},
			error: function(xhr, status, error) {
				console.log("load ERROR");
				//alert( "ERROR: " + xhr.responseText + "; Status:" + status + "; Error:" + error);
			}
			//timeout: 7000
		});
    this.onSortChange = this.onSortChange.bind(this);
  }

  onSortChange(sortName, sortOrder) {
    console.log('onSortChange', arguments);
		if (this.state.sortBy != sortName) {
			this.setState({sortBy:sortName});
			this.props.onSortChange(sortName);
			//console.log("change");
		};
		this.setState({
			sortName,
			sortOrder
		});
	}

	render() {
		const options = {
			sortName: this.state.sortName,
			sortOrder: this.state.sortOrder, 
			onSortChange: this.onSortChange
		};
    return (
      <div className="main">
				<BootstrapTable data={this.state.data}  options={ options } striped hover condensed height='520' scrollTop={ 'Top' }>
					<TableHeaderColumn className="indexColumn" width="30"  dataField="img" dataFormat={indexN}>#</TableHeaderColumn>
		      <TableHeaderColumn dataField="img" dataFormat={imageName} isKey={true}>Camper user</TableHeaderColumn>
					<TableHeaderColumn dataField='alltime' dataSort>All time points</TableHeaderColumn>
					<TableHeaderColumn dataField='recent' dataSort>Points in Last 30 days</TableHeaderColumn>
				</BootstrapTable>

      </div>
    );
  }
}

export default MainComponent;
