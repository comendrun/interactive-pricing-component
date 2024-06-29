import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import FreeTrial from "./FreeTrial";
import BodyMain from "./Body/BodyMain";

export default function Body() {
  return (
    <div className="body flex flex-col gap-y-5 w-[90%] max-w-[500px] mx-auto rounded-lg px-6 py-8 desktop:gap-y-10 desktop:w-[100%] desktop:px-0">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<BodyMain />}
          />
          <Route
            path="/start/"
            element={<FreeTrial />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}
