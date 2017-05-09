var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function(){
        var {text, id, completed, createdAt, completedAt} = this.props;
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if (completedAt !== undefined) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('Do MMM YYYY @ h:mm a')
        };

        return (
            <div onClick={() => { 
                this.props.onToggle(id);
                }}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        )
    }

});

module.exports = Todo;