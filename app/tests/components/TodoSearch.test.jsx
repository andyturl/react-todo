var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {      
      var spy = expect.createSpy();
      var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(todoSearch));
      var enteredText = 'test';
      var input = $el.find('input[type=search]')[0];

      input.value = enteredText;
      TestUtils.Simulate.change(input);

      expect(spy).toHaveBeenCalledWith(false, enteredText);      
  });

  it('should call onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');      
  });
});
