import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import * as Redux from 'redux';
import { applyMiddleware, createStore} from 'redux';


/**
 * Create Redux Store
 */
let defaultAppState = {name: 'David Shams'};
function mreducer(state=defaultAppState, action) {
    console.log("state ", state);
    if( action.type === 'ADD_TITLE') {
        return {
            ...state, title: 'New Title'
        }
    } 
    return state;
}
let store = createStore(mreducer, defaultAppState);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
