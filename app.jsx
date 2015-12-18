var React = require('react');
var ReactDOM = require('react-dom');
var Map = require('./javascripts/map.jsx');
var Search = require('./javascripts/search.jsx');

var App = React.createClass({
  render: function() {
    return <Search/>;
  }
});

ReactDOM.render(<div><App/></div>,
    document.getElementById('map-container')
);
