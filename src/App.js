import { BrowserRouter as Router } from "react-router-dom";

import withSplachScreen from "./component/BeTxt/BeTxt";

function App() {
  return (
    <Router>
      <withSplachScreen />
    </Router>
  );
}

export default withSplachScreen(App);
