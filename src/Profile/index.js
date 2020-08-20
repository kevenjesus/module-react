import React from "react";
import Photo from "./Photo";
import Infos from "./Infos";
import "./estilo.css";

function Profile(props) {
  const { name, age, img, size } = props;
  return (
    <div className="container">
      <Photo src={img} alt={name} size={size} />
      <Infos name={name} age={age} />
    </div>
  );
}

export default Profile;
