import React from 'react';

export default function Jokes(props) {
  return (
    <div className="container text-center">
   
     {props.question?"Q" </h4>
      <h4>Answer: {props.punchLine}</h4>
    </div>
  );
}
