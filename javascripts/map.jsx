var React = require('react');
var ReactDOM = require('react-dom');

var Map = React.createClass({
  componentDidMount: function() {
    this.update();
  },

  componentDidUpdate: function() {
    this.update();
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.coords !== nextProps.coords;
  },

  update: function() {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var coords = this.props.coords;
    var mapOptions = {
      center: coords,
      zoom: this.props.zoom
    };
    this.map = new google.maps.Map(map, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(coords.lat, coords.lng)
      });
    marker.setMap(this.map);
  },

  render: function() {
    return (<div className='map' ref='map'></div>);
  }
  });

module.exports = Map;
