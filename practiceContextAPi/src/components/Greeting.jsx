import React from 'react'
import useLanguageContext from '../context/LanguageContext'

function Greeting() {
    const {language,setLanguage,t} = useLanguageContext();

  return (
    <>
         <div>{t("greet")}</div>
         <button>{t("button")}</button>
    </>
  )
}

export default Greeting