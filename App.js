const heading = React.createElement(
  "div",
  {
    id: "heading",
  },
  [
    React.createElement(
      "h1",
      {
        id: "headingH1",
      },
      "hello from h1"
    ),
    React.createElement("h4", { id: "headingH2" }, "hello from h4"),
  ]
);
console.log(ReactDOM);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(ReactDOM);

root.render(heading);
