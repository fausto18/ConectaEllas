import { createContext, useContext, useState } from "react";
import { pt } from "../i18n/pt";
import { en } from "../i18n/en";

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  const text = lang === "pt" ? pt : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, text }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
