// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import { logger } from 'redux-logger';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import channelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import messagesReducer from './reducers/messages_reducer';
import usernameReducer from './reducers/username_reducer';

// State and reducers
const initialState = {
  channels: [ 'general', 'react', 'paris' ],
  selectedChanel: 'general',
  messages: [],
  // username: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`

}

const reducers = combineReducers({
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  messages: messagesReducer,
  username: usernameReducer,
});

// render an instance of the component in the DOM
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, promiseMiddleware));

ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);


