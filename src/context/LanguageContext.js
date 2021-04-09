import React, {createContext, useState, useContext} from "react";

export const LanguageSetting = createContext({});

const LanguageProvider = (props) => {
    const [language, setLanguage] = useState("nl");
    return <LanguageSetting.Provider value={{language, setLanguage}}>
                { props.children }
            </LanguageSetting.Provider>

}

export const useLanguage = () => {
    return useContext(LanguageSetting)
}

export default LanguageProvider;

