
// <div id="parent">
//     <div id="child">
//           <h1>Hello React JS</h1>  
//     </div>
// </div>

const parent = React.createElement("div",{id: "parent"}, 
React.createElement("div",{id: "child"},React.createElement("H1",{}, "Hello React Library from...")  ) );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
