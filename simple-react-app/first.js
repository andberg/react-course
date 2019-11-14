"use strict";

const e = React.createElement;

class HelloWorld extends React.Component {
  render() {
    return e(
      "h1",
      null,
      "Hello World"
    );
  }
}

const domContainer = document.querySelector("#first");
ReactDOM.render(e(HelloWorld), domContainer);