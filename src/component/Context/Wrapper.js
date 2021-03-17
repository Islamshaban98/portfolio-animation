import React, { useContext, useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
// import { Context } from "react-intl/src/components/injectIntl";
import English from "../../lang/en.json";
import Spanish from "../../lang/sp.json";

const LangContext = React.createContext();
const local = navigator.language;
let lang;
if (local === "en") {
  lang = English;
} else {
  lang = Spanish;
}
export const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);
  function selectLang(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "sp") {
      setMessages(Spanish);
    } else {
      setMessages(English);
    }
  }
  const translate = (id, value = {}) => (
    <FormattedMessage id={id} values={{ ...value }} />
  );
  return (
    <LangContext.Provider value={{ locale, selectLang, translate }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
export default Wrapper;
