import React from 'react';

export default function Jokes(props) {
  console.log(props.question);
  return (
    <div className="container text-center">
      <h4>
        {props.question === undefined ? '' : `Question: ${props.question}`}
      </h4>
      <h4>Answer: {props.punchLine}</h4>
    </div>
  );
}
