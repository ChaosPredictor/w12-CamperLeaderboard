require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Footer from './Footer';
import Main from './Main';
import Title from './Title';
import $ from 'jquery';

var DATA = [{"username":"sjames1958gm","img":"https://avatars.githubusercontent.com/u/4639625?v=3","alltime":5810,"recent":384,"lastUpdate":"2017-03-11T03:22:18.809Z"},{"username":"Manish-Giri","img":"https://avatars1.githubusercontent.com/u/11348778?v=3","alltime":4412,"recent":591,"lastUpdate":"2017-03-14T18:46:16.027Z"},{"username":"Blauelf","img":"https://avatars.githubusercontent.com/u/5952026?v=3","alltime":3458,"recent":258,"lastUpdate":"2017-03-11T03:12:27.476Z"},{"username":"anthonygallina1","img":"https://avatars.githubusercontent.com/u/11003055?v=3","alltime":3291,"recent":64,"lastUpdate":"2017-03-11T00:14:23.635Z"},{"username":"Masd925","img":"https://avatars.githubusercontent.com/u/9335367?v=3","alltime":3261,"recent":231,"lastUpdate":"2017-03-11T00:13:38.363Z"},{"username":"Chrono79","img":"https://avatars.githubusercontent.com/u/9571508?v=3","alltime":3253,"recent":201,"lastUpdate":"2017-03-11T00:17:09.839Z"},{"username":"revisualize","img":"https://avatars.githubusercontent.com/u/1588399?v=3","alltime":3211,"recent":280,"lastUpdate":"2017-03-13T05:23:15.950Z"},{"username":"diomed","img":"https://avatars.githubusercontent.com/u/72777?v=3","alltime":3176,"recent":493,"lastUpdate":"2017-03-14T18:50:13.200Z"},{"username":"Takumar","img":"https://avatars.githubusercontent.com/u/2951935?v=3","alltime":3154,"recent":3,"lastUpdate":"2017-03-11T00:12:23.070Z"},{"username":"camperbot","img":"https://avatars.githubusercontent.com/u/13561988?v=3","alltime":3083,"recent":104,"lastUpdate":"2017-03-11T00:12:38.124Z"},{"username":"abhisekp","img":"https://avatars.githubusercontent.com/u/1029200?v=3","alltime":3060,"recent":14,"lastUpdate":"2017-03-11T00:14:08.508Z"}];
//$.getJSON("https://fcctop100.herokuapp.com/api/fccusers/top/recent", function(json) {
//	DATA = json; // this will show the info it in firebug console
//	console.log(DATA);
//});


class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA
    };
		//DATA = [{"username":"sjames1958gm","img":"https://avatars.githubusercontent.com/u/4639625?v=3","alltime":5810,"recent":384,"lastUpdate":"2017-03-11T03:22:    18.809Z"},{"username":"Manish-Giri","img":"https://avatars1.githubusercontent.com/u/11348778?v=3","alltime":4412,"recent":591,"lastUpdate":"2017-03-14T18:46:1    6.027Z"}];
		var self = this;
		$.ajax({
			url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
			dataType: 'json',
			success: function( jsonData ) {
			//	DATA = jsonData;
				//this.handleData;

			//},
			//handleData: function(data){
				self.setState({
					data: jsonData
				});
				alert( "SUCCESS:  " + self.state.data );
				//this.forceUpdate();
			},
			error: function(xhr, status, error) {
				alert( "ERROR: " + xhr.responseText + "; Status:" + status + "; Error:" + error);
			}
			//error: function( jsonData ) {
			//	alert( "ERROR" );
				//DATA = require('json!../data/alltime.json');
				//DATA = [{"username":"sjames1958gm","img":"https://avatars.githubusercontent.com/u/4639625?v=3","alltime":5810,"recent":384,"lastUpdate":"2017-03-11T03:22:    18.809Z"},{"username":"Manish-Giri","img":"https://avatars1.githubusercontent.com/u/11348778?v=3","alltime":4412,"recent":591,"lastUpdate":"2017-03-14T18:46:1    6.027Z"}];
				//this.setState({
				//	data: DATA
				//});
			//},
			//timeout: 7000
		});

  }

  render() {
    return (
      <div className="index">
				<Title />
				<Main data={this.state.data}/>
				<Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
