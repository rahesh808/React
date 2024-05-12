import React from "react";
import ReactDOM from "react-dom/client";

const element = <span>React Element </span>;

//React Element
const jsxHeading = (
  <h1 id="heading">
    {element}
    Namaste React
  </h1>
);

//React Componenet
const Title = () => (
  <h1 className="title">
    {jsxHeading}
    Namaste React using title component
  </h1>
);

const Headingcomponenet = () => (
  <h1 className="headingcomponent">
    <Title />
    {Title()}
    <Title></Title>
    Namaste React using Heading component
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headingcomponenet />);
