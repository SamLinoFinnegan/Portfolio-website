import React , { lazy, Suspense } from "react";


const LazyComponent = lazy(() => import('./components/Lazy.js'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
