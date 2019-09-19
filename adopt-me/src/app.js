const pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.animals),
    React.createElement("h1", {}, props.breed)
  ]);
};
const petarea = ({ age, height, weight }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, age),
    React.createElement("h1", {}, height),
    React.createElement("h1", {}, weight)
  ]);
};

const Bpp = () => {
  return React.createElement("div", { id: "new-thing" }, [
    React.createElement("span", {}, "I love react"),
    React.createElement("span", {}, "I love react"),
    React.createElement(pet, {
      name: "luna",
      animals: "Dog",
      breed: "pure"
    }),
    React.createElement(petarea, {
      age: "5 years old",
      height: "4ft",
      weight: "40 pound"
    })
  ]);
};
ReactDOM.render(React.createElement(Bpp), document.getElementById("boot"));
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!")
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
