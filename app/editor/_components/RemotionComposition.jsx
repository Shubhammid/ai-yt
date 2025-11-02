import React from "react";
import { AbsoluteFill } from "remotion";

function RemotionComposition() {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <h2
        style={{
          color: "white",
          fontSize: 80,
          fontWeight: "bold",
        }}
      >
        Hello World 👋
      </h2>
    </AbsoluteFill>
  );
}

export default RemotionComposition;
