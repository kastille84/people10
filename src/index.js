import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';

//reducers
import itemReducer from './store/reducers/item';
import priceReducer from './store/reducers/price';

// import registerServiceWorker from './registerServiceWorker';
const rootReducer = combineReducers({
    itemRedux: itemReducer,
    priceRedux: priceReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(thunk)
));

const app = (
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>
);

ReactDOM.render(app, document.getElementById('root'));
//registerServiceWorker();
