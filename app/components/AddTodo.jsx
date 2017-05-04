var React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        var value = this.refs.todoItemText.value.trim();

        if (value.length > 0) {            
            this.refs.todoItemText.value = '';
            this.props.onTodoAdded(value);            
        } else {
            this.refs.todoItemText.focus();
        }
    },
    render: function(){
        var {text, id} = this.props;

        return (
            <div>
                <form ref="form" onSubmit={this.handleSubmit} className="add-todo-form">
                    <input type="text" ref="todoItemText" placeholder="Enter todo item" />
                    <button className="button expanded">
                        Add new todo
                    </button>
                </form>               
            </div>
        )
    }

});

module.exports = AddTodo;