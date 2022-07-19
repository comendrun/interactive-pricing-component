import React from "react";

export default function BodyTop() {
  return (
    <div className="body-top-container grid  gap-y-5 justify-center grid-cols-1 desktop:grid-cols-2">
      <h6 className="body-top-title order-0 tracking-widest text-bold">
        Pageviews
      </h6>
      <div className="body-top-slider order-1 desktop:order-2 desktop:col-span-2 w-full">
        Slider
      </div>

      <div className="body-top-price order-2 desktop:order-1 flex mx-auto items-center justify-center">
        <h1>$16.00</h1>
        <h6>/month</h6>
      </div>
      <div className="body-top-bill order-3  flex flex-row items-center justify-center gap-2 desktop:col-span-2">
        <h6>Monthly Billing</h6>
        <div>
          <div className="button w-[35px] border-2 border-black rounded-xl h-[18px] p-[0.1px] bg-black">
            <div className="button-in-button rounded-full w-[40%] border-2  border-black h-full bg-white"></div>
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
