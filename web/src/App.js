import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Pria = lazy(() => import('./Pria'));
const Wanita = lazy(() => import('./Wanita'));
const Anak = lazy(() => import('./Anak'));

const App = () => (
 <Router>
   <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pria" element={<Pria />} />
      <Route path="/Wanita" element={<Wanita />} />
      <Route path="/Anak" element={<Anak />} />
    </Routes>
   </Suspense>
 </Router>
);

export default App;