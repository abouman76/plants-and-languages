import React, {useContext} from 'react';
import content from '../../data/content.json';

import { LanguageSetting } from "../../context/LanguageContext";

function Home() {
    const {activeLanguage} = useContext(LanguageSetting);
  return (
    <div className="page-container">
        // <h1>{activeLanguage}</h1>
      <h2>{content[activeLanguage].home.title}</h2>
      <p>{content[activeLanguage].home.introText}</p>
    </div>
  );
}

export default Home;
