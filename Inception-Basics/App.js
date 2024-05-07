//const heading = React.createElement("h1", { id: "heading" }, "Hello world from React");
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [React.createElement("h1", { id: "heading" }, "This is the header tag"), React.createElement("h2", { id: "heading2" }, "This is the header2 tag")])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)