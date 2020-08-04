import React from 'react';

import './App.css';

const Welcome = (props) => {
  return (
    <div>
      <svg height="200" width="200">       
      <rect width="200" height="200" stroke="black" fill="none" stroke-width="2" />
        <circle cx="100" cy="100" r={props.rad} shape-rendering="geometricPrecision"/>
    </svg>
    </div>
  );
}

function App() {
  return (
    <div className="Main">
   
    
      <div className="hex1">
        <svg height="500" width="500" >
           {/* <rect width="500" height="500" stroke="black" fill="none" stroke-width="2" />  */}
          <polygon 
            points="
              50,0
              100,25 
              100,75 
              50,100 
              0,75
              0,25
              " 
            fill="#3b3a30" transform="scale(3)" id="circle1" />
        </svg>
      </div>
      <div className="hex2">
        <svg height="500" width="500" >
           {/* <rect width="500" height="500" stroke="black" fill="none" stroke-width="2" />  */}
          <polygon 
            points="
              50,0
              100,25 
              100,75 
              50,100 
              0,75
              0,25
              " 
            fill="#3b3a30" transform="scale(3)" id="circle1" />
        </svg>
      </div>
      <div className="hex3">
        <svg height="500" width="500" >
           {/* <rect width="500" height="500" stroke="black" fill="none" stroke-width="2" />  */}
          <polygon 
            points="
              50,0
              100,25 
              100,75 
              50,100 
              0,75
              0,25
              " 
            fill="#3b3a30" transform="scale(3)" id="circle1" />
        </svg>
      </div>
      <div className="hex4">
        <svg height="500" width="500" >
           {/* <rect width="500" height="500" stroke="black" fill="none" stroke-width="2" />  */}
          <polygon 
            points="
              50,0
              100,25 
              100,75 
              50,100 
              0,75
              0,25
              " 
            fill="#3b3a30" transform="scale(3)" id="circle1" />
        </svg>
      </div>
    </div>
  );
}


//40 and 80




export default App;
