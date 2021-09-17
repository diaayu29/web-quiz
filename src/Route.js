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
import PotensiSDA from './Page/IPS/MateriIPS/BAB1/Sub-Bab/PotensiSDA';
import Ruang from './Page/IPS/MateriIPS/BAB1/Sub-Bab/RuangdanKeruangan';
import DinamikaKependudukanInd from './Page/IPS/MateriIPS/BAB1/Sub-Bab/DinamikaPenduduk';
import KondisiAlamInd from './Page/IPS/MateriIPS/BAB1/Sub-Bab/KondisiAlam';
import LetakIndonesia from './Page/IPS/MateriIPS/BAB1/Sub-Bab/LuasIndonesia';
import Pengertian from './Page/IPA/Sub-Bab/Pengertian';
import Besaran from './Page/IPA/Sub-Bab/Besaran';
import SI from './Page/IPA/Sub-Bab/SistemInternasional';
import AlatUkur from './Page/IPA/Sub-Bab/AlatUkur';

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
      <Route path="/RuangdanKeruangan" component = {Ruang}></Route>
        <Route path="/PotensiSDA" component = {PotensiSDA}></Route>
        <Route path="/DinamikaKependudukanIndonesia" component = {DinamikaKependudukanInd}></Route>
        <Route path="/KondisiAlamIndonesia" component = {KondisiAlamInd}></Route>
        <Route path="/LetakIndonesia" component = {LetakIndonesia}></Route>
        <Route path = "/Pengertian" component = {Pengertian} />
      <Route path = "/Besaran" component = {Besaran} />
      <Route path = "/alat-ukur" component = {AlatUkur} />
      <Route path = "/sistem-internasional" component = {SI} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
