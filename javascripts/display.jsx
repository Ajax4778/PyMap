var React = require('react');
var ReactDOM = require('react-dom');

var Display = React.createClass({
  BLOCKED: "You have not allowed access to your location, so your " +
    "coordinates cannot be displayed.",
  LOADING: "Your location is loading...",

  getInitialState: function() {
    return { message: this.BLOCKED, button: 'Allow?', loading: false };
  },

  getLocation: function() {
    this.setState({ message: this.LOADING, loading: true });

    if (navigator.geolocation) {
      var display = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        var msg = "Latitude: " + position.coords.latitude +
          " Longitude: " + position.coords.longitude;
        display.setState({ message: msg, button: 'Refresh', loading: false });

      });
    } else {
      var msg = 'Your browser does not support Geolocation.';
      this.setState({ message: msg });
    }
  },

  handleClick: function(e) {
    e.preventDefault();
    this.getLocation();
  },

  render: function() {
    var button = (
      <button onClick={this.handleClick} disabled={this.state.loading}>
        {this.state.button}
      </button>
    );

    return (
      <div class='location-message'>
        {this.state.message}
        <br/>
        {button}
      </div>
    );
  }
});

module.exports = Display;
