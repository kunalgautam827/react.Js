import { useEffect, useState } from "react";
import "./App.css";
import useLanguageContext, {
  LanguageContextProvider,
} from "./context/LanguageContext";
import Card from "./components/Card"
import Greeting from "./components/Greeting";

function App() {
  const [language, setLanguage] = useState("en");

  const translate = {
    en: { greet: "Hello", button: "click me" },
    hi: { greet: "नमस्ते", button: "यहाँ क्लिक करें" },
  };

  const t = (key) => {
    return translate[language][key];
  };

  return (
    <LanguageContextProvider value={{ language, setLanguage, t }}>
      <Card />
      <Greeting />
    </LanguageContextProvider>
  );
}

export default App;
