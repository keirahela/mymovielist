import React from "react";

const Image = ({ ...props }) => {
  const { src } = props;
  try {
    return React.createElement(require.resolve("next/image"), {
      src: typeof src === "string" ? src : src.src,
      ...props
    });
  } catch {
    return React.createElement("img", { src, ...props });
  }
};

export default Image;