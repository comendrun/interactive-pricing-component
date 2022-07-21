import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import FreeTrial from "./FreeTrial";
import BodyMain from "./Body/BodyMain";

import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<BodyMain />} />
        <Route path="/start" element={<FreeTrial />} />
      </Routes>
    </AnimatePresence>
  );
}
