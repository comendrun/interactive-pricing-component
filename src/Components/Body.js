import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import FreeTrial from "./FreeTrial";
import BodyMain from "./Body/BodyMain";

export default function Body() {
  return (
    <div className="body flex flex-col gap-y-5 w-[90%] max-w-[500px] rounded-lg px-6 py-8 desktop:gap-y-10 desktop:w-[100%] desktop:px-0">
      <BrowserRouter>
        <Routes>
          <Route
            path="/interactive-pricing-component/"
            element={<BodyMain />}
          />
          <Route
            path="/interactive-pricing-component/start"
            element={<FreeTrial />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
