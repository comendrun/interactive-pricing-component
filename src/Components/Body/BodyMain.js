import React, { useState } from "react";

import checkImage from "../../Assets/Images/Project-images/icon-check.svg";
import { useNavigate } from "react-router-dom";
import { priceData } from "../../priceData";

export default function BodyMain() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [sliderNum, setSliderNum] = useState(3);

  const sliderBackground = (sliderNum) => {
    const currentValue = ((sliderNum - 1) / 4) * 100;
    return `${currentValue}%`;
  };

  const navigate = useNavigate();

  const sendToStart = () => {
    navigate("/start", {
      state: { sliderNum, isMonthly },
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        return sendToStart();
      }}
      className="body-main flex flex-col gap-y-5 max-w-[500px] rounded-lg  desktop:gap-y-10 desktop:w-[100%] desktop:px-0"
    >
      <div className="body-top-container grid  gap-y-5 desktop:gap-y-10 justify-center grid-cols-1 desktop:grid-cols-2 items-center desktop:w-[85%] desktop:mx-auto">
        <h6 className="body-top-title order-0 tracking-widest text-bold desktop:text-left">
          {priceData[sliderNum].pageviews} Pageviews
        </h6>
        <div className="body-top-slider order-1 desktop:order-2 desktop:col-span-2 w-full">
          <input
            type="range"
            value={sliderNum}
            onChange={(e) => setSliderNum(e.target.value)}
            min="1"
            max="5"
            className="slider w-[90%] desktop:w-[100%]"
            style={{ backgroundSize: sliderBackground(sliderNum) }}
          />
        </div>

        <div className="body-top-price order-2 desktop:order-1 flex mx-auto items-center justify-center desktop:justify-end desktop:w-full gap-x-1 ">
          <h1 className="text-2xl desktop:text-3xl">
            $
            {isMonthly
              ? priceData[sliderNum].perMonth
              : priceData[sliderNum].perMonth * 0.75}
            .00
          </h1>
          <h6>/month</h6>
        </div>

        <div className="body-top-bill order-3  flex flex-row items-center justify-center gap-2 desktop:col-span-2 -mr-10">
          <h6>Monthly Billing</h6>
          <div>
            <div
              onClick={() => setIsMonthly((preBoolean) => !preBoolean)}
              className="price-btn flex w-[35px] rounded-xl h-[18px] p-[3px] cursor-pointer justify-end bg-[#cdd7ee]  duration-500 hover:bg-[#7ce8de] ease-linear"
            >
              <div
                className={`button-in-button rounded-full w-[12px] h-full  bg-white ease-in mr-4 duration-200 ${
                  !isMonthly && "yearly-active"
                } `}
              ></div>
            </div>
          </div>
          <div className="flex gap-1">
            <h6>Yearly Billing</h6>
            <h6 className=" rounded-xl px-2 bg-[#ff8c6634] text-[#ff8c66]">
              -25%
            </h6>
          </div>
        </div>
      </div>

      <hr />

      <div className="body-bottom  grid gap-4 grid-cols-1 desktop:grid-cols-2 py-2 desktop:pl-10">
        <div className="body-bottom-text-box w-[50%] mx-auto flex flex-col gap-2 py-2  desktop:w-full">
          <p className="flex items-center justify-center desktop:justify-start gap-x-2">
            <img className="check-image" src={checkImage} alt="check" />{" "}
            Unlimited websites
          </p>
          <p className="flex items-center justify-center desktop:justify-start gap-x-2">
            <img className="check-image" src={checkImage} alt="check" /> 100%
            data ownership
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
    </form>
  );
}

// Here are the different page view ranges and the corresponding monthly price totals:

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
