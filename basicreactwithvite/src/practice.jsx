import React from "react"
function Add(){
    const a = 5;
    const b = 18;
    const sum=a+b;
    // const element = React.createElement(
    //     'div',
    //     {
    //         id:"addition",
    //         style: { backgroundColor: "pink" }
    //     },
    //     "addition of two number is ",
    //     sum
    // );
  const element = (
  <div style={{ backgroundColor: "red" }}>
    the sum of two number is {sum}
  </div>
)
return element
}
export default Add;