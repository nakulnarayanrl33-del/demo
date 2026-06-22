import React from 'react';

function Child(props) {
    function handleClick() {
           props.increment()
    }
     return (
         <button onClick = {handleClick} >Increment Count </button>
      );
}

export default Child;