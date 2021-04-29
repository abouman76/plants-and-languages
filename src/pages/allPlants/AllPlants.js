import React from 'react';
import content from '../../data/content.json';

import { useLanguage } from "../../context/LanguageContext";

function AllPlants() {
    const {activeLanguage} = useLanguage();

  return (
    <div className="page-container">
      <h2>{content[activeLanguage].plants.title}</h2>
      <p>{content[activeLanguage].plants.text}</p>
      <ul>
        {content[activeLanguage].plants.plants.map((plant) => <li key={plant}>{plant}</li>)}
      </ul>
    </div>
  );
}

export default AllPlants;
