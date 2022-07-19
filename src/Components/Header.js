export default function Header() {
  return (
    <div className="header flex flex-col mx-auto my-10 gap-y-2">
      <h2> Simple, traffic-based pricing</h2>
      <div className="flex flex-col desktop:flex-row gap-y-1  ">
        <p className="">Sign-up for our 30-day trial. </p>
        <p>No credit card required.</p>
      </div>
    </div>
  );
}
