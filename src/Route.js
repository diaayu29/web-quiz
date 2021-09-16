import React from 'react';
import Result from './Page/result';
import ShowIPS from './Page/IPS/QuizIPSStart';
import ShowIPA from './Page/IPA/QuizIPAStart';
import ShowQuestionIPS from './Page/IPS/QuizIPSQuestion';
import ShowQuestionIPA from './Page/IPA/QuizIPAQuestion';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route exact path="/" component = {Home} />  
      <Route path="/startIPA" component = {ShowIPA} />
      <Route path="/startIPS" component = {ShowIPS} />
      <Route path="/questionIPA" component = {ShowQuestionIPA} />
      <Route path="/questionIPS" component = {ShowQuestionIPS} />
      <Route path="/result" component = {Result} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
