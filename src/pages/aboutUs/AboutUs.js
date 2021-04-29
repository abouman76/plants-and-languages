import React from 'react';
import writers from '../../assets/bob_betsy.jpg';
import content from '../../data/content.json';

import { useLanguage } from "../../context/LanguageContext";

function AboutUs() {
    const {activeLanguage} = useLanguage();

  return (
    <div className="page-container">
      <h2>{content[activeLanguage].aboutUs.title}</h2>
      <img src={writers} alt="Bob & Betsy"/>
      <p>{content[activeLanguage].aboutUs.writers}</p>
    </div>
  );
}

export default AboutUs;
