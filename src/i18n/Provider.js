import { Fragment } from "react";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./locales";
import messages from "./messages";
// import { LOCALES } from "./locales";

const Provider = ({ children, locale = LOCALES.SPANISH }) => {
  return (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};
export default Provider;
