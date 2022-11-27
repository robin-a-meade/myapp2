import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

require("./styles.css");
const img = require('./images/Example.jpg');

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        <img src={img} />
      </div>
    );
  }
}

// Create a div, like seen here:
// https://github.com/CreativeTechGuy/ReactTemplate/blob/main/src/index.tsx
const div = document.createElement("div");
document.body.appendChild(div);
const root = createRoot(div);
root.render(
    <StrictMode>
        <App name="World"/>
    </StrictMode>
);
