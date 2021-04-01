import React from 'react';
import './../styles/Card.css';


function Card(props) {
  return (
    <div className='Card'>

  <div > <img src ='{props.icon}' />  </div>

<div>{props.title}</div>
    </div>
  );
}

export default Card;
