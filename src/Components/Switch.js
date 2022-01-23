import React, { useState } from 'react';
import './switch.css'

const Switch = ({bulbOn,tottggle}) => {
    
    var [color, setcolor] = useState('gray');
  
    console.log(bulbOn);
   var buttonclick=()=>{
    bulbOn==='ON'?setcolor("orange"):setcolor("grey");
    tottggle()
   }
    return (
        <div className='container'>
            <div className="buttonl">
                <button style={{background:color}}> </button> 
              
            </div>
            <div className="buttons">
                <button onClick={buttonclick}  >{bulbOn} </button>
                
            </div>
            
        </div>
    );
};

export default Switch;