import React, { useState } from "react";

const priceData = {
  1: { pageviews: "10K", perMonth: "8" },
  2: { pageviews: "50K", perMonth: "12" },
  3: { pageviews: "100K", perMonth: "16" },
  4: { pageviews: "500k", perMonth: "24" },
  5: { pageviews: "1M", perMonth: "36" },
};

export default function BodyTop() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [sliderNum, setSliderNum] = useState(3);
  console.log(sliderNum);

  return (
    <div className="body-top-container grid  gap-y-5 justify-center grid-cols-1 desktop:grid-cols-2">
      <h6 className="body-top-title order-0 tracking-widest text-bold">
        {priceData[sliderNum].pageviews} Pageviews
      </h6>
      <div className="body-top-slider order-1 desktop:order-2 desktop:col-span-2 w-full">
        <input
          type="range"
          value={sliderNum}
          onChange={(e) => setSliderNum(e.target.value)}
          min="1"
          max="5"
          className="slider w-[90%]"
        />
      </div>

      <div className="body-top-price order-2 desktop:order-1 flex mx-auto items-center justify-center ">
        <h1 className="">${priceData[sliderNum].perMonth}.00</h1>
        <h6>/month</h6>
      </div>
      <div className="body-top-bill order-3  flex flex-row items-center justify-center gap-2 desktop:col-span-2">
        <h6>Monthly Billing</h6>
        <div>
          <div
            onClick={() => setIsMonthly((preBoolean) => !preBoolean)}
            className={`price-btn flex w-[35px] rounded-xl h-[18px] p-[3px] cursor-pointer justify-end bg-slate-400  duration-500 hover:bg-[#7ce8de]  ease-linear`}
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
          <h6>-25%</h6>
        </div>
      </div>
    </div>
  );
}

// Here are the different page view ranges and the corresponding monthly price totals:

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
