import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();



/*import React from 'react';
import ReactDOM from 'react-dom/client';
const Context = React.createContext("abc");
function MyComponent() {
   const value = React.useContext(Context);
  return <span>{value}</span>;
}
export function Main() {
  const value = "My Context Value";
  return (
    <Context.Provider value={value}>
      <MyComponent />
    </Context.Provider>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);*/

/*import { useState } from "react";
import ReactDOM from "react-dom/client";
function FavoriteColor() {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);*/


/*import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return <h1>I have rendered {count} times!</h1>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);*/

