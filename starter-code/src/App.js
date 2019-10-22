import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="icons">
            <img src="./images/ironhack-logo.svg" />
            <img src="./images/menu-top.svg" />
          </div>
          <div className="content-header">
            <h1>
              Say hello to <br />
              ReactJS
            </h1>
            <p>
              You will learn a Frontend <br />
              framework from scratch, to <br />
              becaome an Ninka Developer. <br />
            </p>
            <button>Awesome!</button>
          </div>
        </div>
        <div className="cards">
          <div>
            <img src="./images/icon1.png" />
            <h2>Declarative</h2>
            <p>
              Reac makes it <br />
              painlesss to create
              <br />
              interative UIs.
              <br />
            </p>
          </div>
          <div>
            <img src="./images/icon2.png" />
            <h2>Components</h2>
            <p>
              Build encapsulated
              <br />
              components that
              <br />
              manage their state.
              <br />
            </p>
          </div>
          <div>
            <img src="./images/icon3.png" />
            <h2>Single-Way</h2>
            <p>
              A set of immutable <br />
              values are passed to
              <br />
              the component's.
              <br />
            </p>
          </div>
          <div>
            <img src="./images/icon4.png" />
            <h2>JSX</h2>
            <p>
              Statically-typed
              <br />
              designed to run on
              <br />
              modern browsers
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
