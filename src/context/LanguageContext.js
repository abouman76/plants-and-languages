import React, {createContext, useState, useContext} from "react";

export const LanguageSetting = createContext({});

const LanguageProvider = (props) => {
    const [language, setLanguage] = useState("nl");

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

    return <LanguageSetting.Provider value={data}>
                { props.children }
            </LanguageSetting.Provider>

}
export const useLanguage = () => {
    return useContext(LanguageSetting)
}

export default LanguageProvider;

