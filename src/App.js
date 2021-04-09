import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import AllPlants from './pages/allPlants/AllPlants';

import { LanguageSetting } from "./context/LanguageContext";

import {useLanguage} from "./context/LanguageContext";

function App() {

    // const [language, setLanguage] = useLanguage();

    const [language, setLanguage] = useState("nl");
    // const [flag, setFlag] = useState();

    // const changeLanguages = () => {
    //
    // }

    const setNl = () => {
        setLanguage("nl")
    }

    const setEs = () => {
        setLanguage("es")
    }

    const data = {
        activeLanguage: language,
        setNlFunction: setNl,
        setEsFunction: setEs
    }

   // console.log("data", data);

  return (
   <LanguageSetting.Provider value={data}>
    <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/all-plants">
            <AllPlants />
          </Route>
        </Switch>
    </Router>
     </LanguageSetting.Provider>
     );
}

export default App;
