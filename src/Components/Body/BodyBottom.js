import React from "react";
import checkImage from "../../Assets/Images/Project-images/icon-check.svg";

export default function BodyBottom() {
  return (
    <div className="body-bottom  grid gap-4 grid-cols-1 desktop:grid-cols-2 py-2">
      <div className="body-bottom-text-box w-[50%] mx-auto flex flex-col gap-2 py-2  desktop:w-full">
        <p className="flex items-center justify-center desktop:justify-start gap-x-2">
          <img className="check-image" src={checkImage} alt="check" /> Unlimited
          websites
        </p>
        <p className="flex items-center justify-center desktop:justify-start gap-x-2">
          <img className="check-image" src={checkImage} alt="check" /> 100% data
          ownership
        </p>
        <p className="flex items-center justify-center desktop:justify-start gap-x-2">
          <img className="check-image" src={checkImage} alt="check" /> Email
          reports
        </p>
      </div>
      <button className="submit-btn w-[60%] desktop:w-[70%] m-auto rounded-2xl py-[0.8em] text-xs hover:text-white">
        Start my trial
      </button>
    </div>
  );
}
