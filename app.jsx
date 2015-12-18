var React = require('react');
var ReactDOM = require('react-dom');
var Map = require('./javascripts/map.jsx');
var SearchForm = require('./javascripts/search_form.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Map/>
        <SearchForm/>
      </div>
    );
  }
});

ReactDOM.render(<div><App/></div>,
    document.getElementById('map-container')
);
