import React from 'react';
import Result from './Page/result';
import ShowIPS from './Page/IPS/QuizIPSStart';
import ShowIPA from './Page/IPA/QuizIPAStart';
import ShowQuestionIPS from './Page/IPS/QuizIPSQuestion';
import ShowQuestionIPA from './Page/IPA/QuizIPAQuestion';
import Materi1IPS from './Page/IPS/MateriIPS/BAB1/Materi1';
import Materi1IPA from './Page/IPA/MateriIPA/BAB1/Materi1';
import ChanceIPS from './Page/IPS/chance';
import ChanceIPA from './Page/IPA/MateriIPA/BAB1/ChanceIPA';
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
      <Route path="/startQuizIPA" component = {ShowIPA} />
      <Route path="/startQuizIPS" component = {ShowIPS} />
      <Route path="/IPS" component = {ChanceIPS} />
      <Route path="/IPA" component = {ChanceIPA} />
      <Route path="/questionIPA" component = {ShowQuestionIPA} />
      <Route path="/questionIPS" component = {ShowQuestionIPS} />
      <Route path="/result" component = {Result} />
      <Route path="/Materi1IPS" component = {Materi1IPS} />
      <Route path="/Materi1IPA" component = {Materi1IPA} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
