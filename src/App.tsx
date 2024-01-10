// App.tsx
import React, { useState, useEffect } from "react";
import Preloader from "./Components/Preloader";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace this with your actual loading logic)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2200); // 2000ms delay

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Preloader />
      ) : (
        // Your main app content
        <div>
          <h1>Your App</h1>
          {/* Other components */}
        </div>
      )}
    </div>
  );
};

export default App;
