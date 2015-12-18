var React = require('react');
var ReactDOM = require('react-dom');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SearchForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { searchInput: '', };
  },

  render: function() {
    var form = (
      <form className='map-form' onSubmit={this.handleSubmit}>
        <div className='form-title'>
          <label> Search: </label>
          <input valueLink={this.linkState('searchInput')}
                 placeholder="Enter an address, city, or zip code."/>
        </div>
        <input className='map-form-submit'
               type="submit"
               value="Search!"/>
      </form>
    );

    return (<div className='search-form-container'>{form}</div>);
  }
});

module.exports = SearchForm;
