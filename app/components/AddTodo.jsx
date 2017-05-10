var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var todoItemText = this.refs.todoItemText.value.trim();

        if (todoItemText.length > 0) {            
            this.refs.todoItemText.value = '';            
            dispatch(actions.startAddTodo(todoItemText));
        } else {
            this.refs.todoItemText.focus();
        }
    },
    render: function(){
        var {text, id} = this.props;

        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit} className="add-todo-form">
                    <input type="text" ref="todoItemText" placeholder="Enter todo item" />
                    <button className="button expanded">
                        Add new todo
                    </button>
                </form>               
            </div>
        )
    }

});

export default connect()(AddTodo);