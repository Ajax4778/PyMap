var React = require('react');
var ReactDOM = require('react-dom');

var Map = React.createClass({
  componentDidMount: function() {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);
    thisMap = this.map;
    thisMap.addListener('idle', function() {
      var nE = thisMap.getBounds().getNorthEast();
      var sW = thisMap.getBounds().getSouthWest();
      var bounds = {'bounds' :{
        'northEast': { 'lat': nE.lat(), 'lng': nE.lng() },
        'southWest': { 'lat': sW.lat(), 'lng': sW.lng() }
      }};

      // ApiUtil.fetchStairs(bounds);
    });
  },

  render: function() {
    return (<div className='map' ref='map'></div>);
  }
  });

module.exports = Map;
