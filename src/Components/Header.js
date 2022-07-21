export default function Header() {
  return (
    <div className="header flex flex-col mx-auto  gap-y-2 w-[90%] max-w-[500px]  h-[10rem] justify-center my-5 ">
      <h2 className="desktop:text-2xl"> Simple, traffic-based pricing</h2>
      <div className="flex flex-col desktop:flex-row gap-y-1 mx-auto  ">
        <p className="desktop:text-md ">Sign-up for our 30-day trial. </p>
        <p className="desktop:text-md ">No credit card required.</p>
      </div>
    </div>
  );
}
