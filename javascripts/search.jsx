var React = require('react');
var ReactDOM = require('react-dom');
var Map = require('./map.jsx');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Search = React.createClass({
  mixins: [LinkedStateMixin],

  // Default: San Francisco
  DEFAULT_COORDS: {lat: 37.7833, lng: -122.4167},
  DEFAULT_ZOOM: 8,

  getInitialState: function() {
    return { searchInput: '', targetLocation: null };
  },

  componentDidMount: function() {
    this.getLocation();
  },

  getLocation: function() {
    if (navigator.geolocation) {
      var that = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        var location = {
          lat: position.coords.latitude, lng: position.coords.longitude
        };
        that.setState({ targetLocation: location });
      });
    }
  },

  buildForm: function() {
    var form = (
      <form className='map-form' onSubmit={this.handleSubmit}>
        <div className='form-title'>
          <input valueLink={this.linkState('searchInput')}
                 placeholder="Enter an address."/>
        </div>
        <input className='map-form-submit'
               type="submit"
               value="Search!"/>
      </form>
    );
    return form;
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var geocoder = new google.maps.Geocoder();
    var address = this.state.searchInput;
    if (address) {
      var that = this;
      geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          var lat = results[0].geometry.location.lat();
          var lng = results[0].geometry.location.lng();
          that.setState({ targetLocation: { lat: lat, lng: lng } });
        } else {
          that.setState({ targetLocation: 'error' });
        }
      });
    }
  },

  buildMessage: function(coords) {
    lat = coords.lat.toPrecision(5);
    lng = coords.lng.toPrecision(5);
    return " coordinates: (" + lat + ", " + lng + ")";
  },

  render: function() {
    var form = this.buildForm();
    var targetLocation = this.state.targetLocation;
    var msg;

    if (targetLocation) {
      if (targetLocation == 'error') {
        msg = 'Invalid query. Map reset to default.';
        targetLocation = null;
      } else {
        msg = "Your" + this.buildMessage(targetLocation);
      }
    } else {
      msg = "Default" + this.buildMessage(this.DEFAULT_COORDS);
    }

    var coords = targetLocation || this.DEFAULT_COORDS;

    return (
      <div className='display-container'>
        <div className='form-container'>{form}</div>
        <div className='coordinates'>{msg}</div>
        <Map coords={coords} zoom={this.DEFAULT_ZOOM}/>
      </div>
    );
  }
});

module.exports = Search;
