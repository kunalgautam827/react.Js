import React from "react";
import useLanguageContext from "../context/LanguageContext";

function Card() {

    const {language,setLanguage,t} = useLanguageContext()

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="hi">Hindi</option>
    </select>
  );
}

export default Card;
