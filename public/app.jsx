var GreeterMessage = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0){
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0){
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="edit name"/>
        </div>
        <div>
          <textarea ref="message" placeholder="edit message"/>
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'friend',
      message: 'This is the default message.'
    }
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewData: function(updates){
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

var firstName = 'Bryce';
var myMessage = 'This is from myMessage!';

ReactDOM.render(
  <Greeter name={firstName} message={myMessage}/>,
  document.getElementById('app')
);
