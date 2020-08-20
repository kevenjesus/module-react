import React from "react";

export default function Infos(props) {
  return (
    <>
      <h1 className="naming">{props.name}</h1>
      <p className="age">idade {props.age}</p>
    </>
  );
}
