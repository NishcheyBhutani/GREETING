import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



// let currDate = new Date(2020,5,5,22);
// currDate = currDate.getHours();
// let greetings = ' ';
// const cssStyle = {};

// if (currDate>=1 && currDate<12)
// {
//   greetings='Good Morning';
//   cssStyle.color="green";
// }
// else if(currDate>=12 && currDate<19)
// {
//   greetings='Good Afternoon';
//   cssStyle.color="orange";
// }
// else{
//   greetings='Good Night';
//   cssStyle.color="black";
// }

ReactDOM.render(
  // <>
  //   <div>
  //     <h1>Hey!Always keep smiling<span style={cssStyle}> {greetings} </span></h1>
  //   </div>
  // </>

  <App/>
  , document.getElementById("root")
);

