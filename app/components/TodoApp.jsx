var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog'
                },
                {
                    id: uuid(),
                    text: 'Clean the yard'
                }
            ],
            showCompleted: false,
            searchText: ''
        }
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text
                }
            ]
        });        
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