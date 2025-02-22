import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "auto",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <img
        src="error.png"
        alt="Page Not Found"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default NotFound;
