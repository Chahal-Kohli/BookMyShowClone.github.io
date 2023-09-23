import './App.css';
import React from 'react';
import SliderImages from './components/SliderImages';
import Header from './components/Header';
import SliderCard from './components/SliderCard';
import Footer from './components/Footer';
import Registration from './components/Registration';
import ResultClasses from './components/ResultClasses';

import Results from './components/Results'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (

    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" >
            <SliderImages />
            <SliderCard />
          </Route >
          <Route exact path="/results" >
            <Results />
          </Route>
          <Route exact path="/contact" >
            <h1>Contact</h1>
            <Results />
          </Route>
          {/* <Route exact path="//:id" >
            <SingleMovieDbFetch />
            cmzxkmckmc,m,xcxm
          </Route> */}
          <Route exact path="/register">
            <Registration />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router >
  );
}
export default App;
