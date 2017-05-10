var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {      
      var spy = expect.createSpy();
      var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(todoSearch));
      var searchText = 'test';
      var action = {
        type:'SET_SEARCH_TEXT',
        searchText
      };
      var input = $el.find('input[type=search]')[0];

      input.value = searchText;
      TestUtils.Simulate.change(input);

      expect(spy).toHaveBeenCalledWith(action);      
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);      
  });
});
