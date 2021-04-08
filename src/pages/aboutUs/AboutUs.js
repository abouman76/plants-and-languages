import React, {useContext} from 'react';
import writers from '../../assets/bob_betsy.jpg';
import content from '../../data/content.json';

import { LanguageSetting } from "../../context/LanguageContext";

function AboutUs() {
    const {activeLanguage} = useContext(LanguageSetting);

  return (
    <div className="page-container">
      <h2>{content.nl.aboutUs.title}</h2>
      <p>Dit is je profielpagina!</p>
      <img src={writers} alt="Bob & Betsy"/>
      <p>{content.nl.aboutUs.writers}</p>
    </div>
  );
}

export default AboutUs;
