import React from "react";
import { Link, useLocation } from "react-router-dom";
import { priceData } from "../priceData";
import { motion } from "framer-motion";

export default function FreeTrial() {
  const location = useLocation();
  let selectedPlan = location.state.sliderNum;
  return (
    <div className="free-trial flex flex-col gap-4 h-max  justify-center m-auto ">
      <div className="my-2 flex flex-col justify-center items-center gap-1 bg-[#10d8c5] desktop:py-10 desktop:w-[90%] mx-auto rounded-2xl p-2">
        <h3 className="text-blue-900 desktop:font-bold desktop:text-xl ">
          You have chosen{" "}
          <span className="text-xl desktop:text-2xl text-white">
            {location.state.isMonthly
              ? priceData[selectedPlan].perMonth
              : priceData[selectedPlan].perMonth * 0.75}
            $
          </span>{" "}
          {""}({location.state.isMonthly ? "Monthly" : "Yearly"}) plan.
        </h3>
        <p className=" text-xs text-white desktop:text-sm font-light ">
          You will have access to our product maximum up to {""}
          {priceData[selectedPlan].pageviews} views.
        </p>
        {!location.state.isMonthly && (
          <p className=" text-white mt-4 shadow-black">
            Congratulations! You will pay 25% less, since you selected our
            yearly plan!
          </p>
        )}
      </div>

      <hr />

      <div className="flex flex-col gap-2 m-auto desktop:text-left desktop:pl-6 desktop:items-start">
        <h2 className=" text-blue-900 desktop:text-2xl">
          Thank you for choosing us
        </h2>
        <p className="text-md desktop:text-base desktop:">
          Your free trial begins from now and you can enjoy the ride.
        </p>
        <a
          href="/"
          className="px-4 py-2 bg-[#293356] hover:bg-[#293356b0]  mx-auto desktop:mx-0 mb-6 ease-in duration-100 text-white w-max text-xs font-light rounded-xl"
        >
          Go to your dashboard
        </a>
      </div>

      <p className="text-left text-red-500 desktop:px-10 ">
        <span className="text-base">Attention:</span>Please keep in mind that IF
        you aren't satisfied with our services, you have to cancel your
        subscription before the end of your free trial.
      </p>
    </div>
  );
}
