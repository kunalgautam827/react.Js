const containerElement = document.getElementById("root");
const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_black",
  },
  childern: "click to render to google",
};

function createCustomRoot(ReactElement, containerElement) {
  //   const customElement = document.createElement(ReactElement.type);
  //   customElement.innerHTML = ReactElement.childern;
  //   customElement.setAttribute("href", ReactElement.props.herf);
  //   customElement.setAttribute("target", ReactElement.props.target);
  //   containerElement.appendChild(customElement);

  // // // optimized way

  const customElement = document.createElement(ReactElement.type);
  customElement.innerHTML = ReactElement.childern;
  for (const prop in ReactElement.props) {
    if (prop === "children") continue;
    console.log(prop);
    console.log(ReactElement.props[prop]);
    
    customElement.setAttribute(prop, ReactElement.props[prop]);
  }

  containerElement.appendChild(customElement);
}
createCustomRoot(ReactElement, containerElement);
