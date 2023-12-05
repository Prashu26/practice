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
function Header()

{
        return (
            <div>
                    <center><h1>SDM POlytechnic,ujire,Belthangady Tq</h1>
                    <h4>Afiliated to AICTE,New Dehli,Registered by DTE</h4>
                    </center>                         
                </div>
              )
}

function Section()
{
return (
<>
<h1 align="center">Registration Form</h1>   

    <form>
        <div>
        <label id="name">Name</label>
        <input type="text" size="15" name="n1" id="i1" placeholder="Enter your name..."/>
        </div><br/>
        <div>
        <label id="add">Address</label>
        <textarea rows="5" cols="50" name="n2" id="i2"></textarea><br/><br/>

        </div><br/>

        <div>


        <label id="state">State</label>


        <select name="n3" id="i3">


                <option value="KL"selected>Kerala</option>


                <option value="KA" >Karnataka</option>


                <option value="MH">Maharashtra</option>


                <option value="GU">Gujarath</option>


                <option value="AP">Andrapradesh</option>


            </select>


            </div><br/>


        <div>


        <label id="gen">Gender</label>


        <input type="radio" name="n4" id="i4" value="m"/>Male &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<input type="radio" name="n4" id="i5" value="f"/>Female<br/><br/>


        </div><br/>


        <div>


        <label id="quali">Qualification</label>


        <input type="checkbox" value="SSLC" name="n5" id="i6"/>SSLC &nbsp; &nbsp; &nbsp;


        <input type="checkbox" value="PUC" name="n6" id="i7"/>PUC &nbsp; &nbsp; &nbsp;


        <input type="checkbox" value="DIPLOMA" name="n7" id="i8"/>DIPLOMA &nbsp; &nbsp; &nbsp;


        <input type="checkbox" value="BE" name="n8" id="i9"/>BE<br/><br/>


        </div><br/>


        <div>


        <label id="uplolad">  Upload Your Photo </label>


        <input type="file"  name="n9" id="i10"/>


        </div><br/>


        <button type="submit" >Submit</button>


    </form>


    </>
)
}


const root=ReactDOM.createRoot(document.getElementById('root'));


root.render(<><Header/><Section /></>);*/







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

