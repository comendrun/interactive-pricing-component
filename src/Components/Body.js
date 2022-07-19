import React from "react";
import BodyBottom from "./Body/BodyBottom";
import BodyTop from "./Body/BodyTop";

export default function Body() {
  return (
    <div className="body border-2 border-2 flex flex-col gap-y-5 w-[90%] max-w-[500px] rounded-sm px-6 py-8">
      <BodyTop />
      <hr />
      <BodyBottom />
    </div>
  );
}
