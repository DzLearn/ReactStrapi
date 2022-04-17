import './assets/styles/App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Category from './pages/Category'
import HomePage from './pages/HomePage'
import ReviewDetail from './pages/ReviewDetail'

import Header from './layouts/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/detail/:id">
            <ReviewDetail />
          </Route>
          <Route path="/category/:id">
            <Category />
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
