import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "this is a heading");

const HeadingComponent = () => {
  return <h1>This is a heading</h1>;
};
const AnotherHeadingComponent = () => <h1>This is also a heading</h1>;

const Heading = <h1>This is a heading element</h1>;

console.log(Heading);
console.log(HeadingComponent);
console.log(AnotherHeadingComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
