var React = require('react');
var ReactDOM = require('react-dom');
var Map = require('./javascripts/map.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Map/>
      </div>
    );
  }
});

ReactDOM.render(<div><App/></div>,
    document.getElementById('map-container')
);
