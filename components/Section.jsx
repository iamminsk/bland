import React from "react";

export const Section = ({ bgColor, imgSrc, imgAlt, title, artist }) => (
  <section
    style={{
      position: "sticky",
      top: 0,
      height: "100vh",
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
    }}
  ></section>
);
