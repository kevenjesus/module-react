import React from "react";

export default function Photo(props) {
  const { src, alt, size } = props;
  if (!src) {
    return <h1>image not found</h1>;
  }
  return (
    <img
      className="photo"
      width={size ? size : "100"}
      height={size ? size : "100"}
      src={src}
      alt={alt}
    />
  );
}
