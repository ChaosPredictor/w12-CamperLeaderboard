require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Footer from './Footer';
import Main from './Main';
import Title from './Title';
import $ from 'jquery';

var DATA = [{"username":"sjames1958gm","img":"https://avatars.githubusercontent.com/u/4639625?v=3","alltime":5810,"recent":384,"lastUpdate":"2017-03-11T03:22:18.809Z"}];


class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA
    };
		var self = this;
		$.ajax({
			url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
			dataType: 'json',
			success: function( jsonData ) {
				self.setState({
					data: jsonData
				});
			}.bind(this),
			error: function(xhr, status, error) {
				alert( "ERROR: " + xhr.responseText + "; Status:" + status + "; Error:" + error);
			}
			//timeout: 7000
		});
		this.handleSortChange = this.handleSortChange.bind(this);
  }

	handleSortChange(sortBy) {
		console.log(sortBy);
	}

  render() {
    return (
      <div className="index">
				<Title />
				<Main 
					data={this.state.data}
					onSortChange={this.handleSortChange}
				/>
				<Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
