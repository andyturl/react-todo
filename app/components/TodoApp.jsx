var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                }
            ],
            showCompleted: false,
            searchText: ''
        }
    },
    handleAddTodo: function (text) {
        console.log(text);
    },
    handleSearch: function(showCompleted, searchText){
        console.log(showCompleted, searchText);
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText
        })
    },
    render: function(){
        var {todos} = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos}/>
                <AddTodo onTodoAdded={this.handleAddTodo} />
            </div>
        )
    }
});

module.exports = TodoApp;