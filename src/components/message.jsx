import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { selectCity } from "../actions";


class Message extends Component {

  render () {
    return (
      <div key={this.props.message.created_at} >
        <div className='message'>
          <h2>{this.props.message.content}</h2>
          <p>{this.props.message.author}</p>
        </div>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectCity: selectCity },
//     dispatch
//   );
// }

export default connect(mapStateToProps, null)(Message);
