import { useState, Suspense, lazy } from "react";
import "./App.css";

// 👇 Lazy loaded component
const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="app">
      <h1>Lazy Load Component Demo</h1>

      <button onClick={() => setShow(true)}>
        Load Heavy Component
      </button>

      {show && (
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;
