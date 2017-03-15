require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Footer from './Footer';
import Main from './Main';
import Title from './Title';
import $ from 'jquery';

var DATA;
$.getJSON("https://fcctop100.herokuapp.com/api/fccusers/top/recent", function(json) {
	DATA = json; // this will show the info it in firebug console
	console.log(DATA);
});

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
				<Title />
				<Main data={DATA}/>
				<Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
