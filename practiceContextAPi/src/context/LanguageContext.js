import { createContext,useContext } from "react";

export const LanguageContext = createContext(
    {
        language : 'en',
        setLanguage : ()=>{},
        translate:{},
        t : ()=>{},
    }

);

export const LanguageContextProvider = LanguageContext.Provider;

export default function useLanguageContext(){
    return useContext(LanguageContext)
}