import React from 'react';


export default function Samplecomponent({bgColor}) {
  let styleObj = {
    backgroundColor: bgColor,
  };

  let a= 20;
  let b = 30;

  return (
    <>
    <div style={styleObj}> inside sample component </div>
    <div> value of a is : {a} </div>
    <div> value of b is : {b} </div>
    <div>
      sum of {a} and {b} is : {a+b}
      </div>
      </>
  )
}