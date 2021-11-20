import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

export var store = createStore(reducer, applyMiddleware(thunk));
