import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import NavBar from './headerComponent/NavBar.jsx';
import Footer from './footerComponent/Footer.jsx';
class App extends Component {
  render() {
    return (
      <Router>
        <switch>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Footer />
        </switch>
      </Router>
    )
  }
}
export default App;