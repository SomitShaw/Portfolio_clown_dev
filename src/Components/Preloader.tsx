// Preloader.tsx
import React from "react";

const Preloader: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        src="https://giphy.com/embed/wkSyGueYTnk40"
        width="436"
        height="480"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Preloader;
