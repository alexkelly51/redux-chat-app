import React, { Component } from 'react';
import { bindActionCreators }from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';



class MessageForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: '' };
  }


  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.username, this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <button type="submit" value="Submit">Button</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return{
    username: state.username,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

