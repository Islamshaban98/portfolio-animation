import React, { Component } from "react";
import { TweenMax, Power3 } from "gsap";
import Home from "../../Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "../../Pages/Contact";
import Manifest from "../../Pages/Manifest";
import NavPage from "../../Pages/NavPage";
import { I18Provider, LOCALES } from "../../i18n";

const LoadingMessage = () => {
  return (
    <div
      style={{ margin: "0 auto", padding: "20% 0", textAlign: "center" }}
      className="hidden"
    >
      <p
        style={{
          animation: "fade-in ease 20s ",
          color: "#dedede",
          textTransform: "uppercase",
          fontSize: "2rem",
        }}
      >
        Be creative. Be different
      </p>
    </div>
  );
};
function withSplachScreen() {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }
    componentDidMount() {
      try {
        TweenMax.fromTo(
          ".hidden",
          2,
          {
            opacity: 0.5,
          },
          { opacity: 1, y: -50, ease: Power3.easeOut, delay: 0, duration: 0.2 }
        );
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1500);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }
    render() {
      if (this.state.loading) return LoadingMessage();
      return (
        // <I18Provider locale={LOCALES.ENGLISH}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Manifest">
              <Manifest />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
        // </I18Provider>
      );
    }
  };
}
export default withSplachScreen;
