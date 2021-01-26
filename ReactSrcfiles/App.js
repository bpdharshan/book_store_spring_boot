import './App.css';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import bookReducer from "./reducer/BookReducer";
import BookList from './components/BookList';
import CreateBook from './components/CreateBook';
import BookDetails from './components/BookDetails';


const reducer = combineReducers({
  book : bookReducer
})

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={BookList}></Route>
            <Route path="/details/:id" component={BookDetails}></Route>
            <Route path="/addbooks" component={CreateBook}></Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
