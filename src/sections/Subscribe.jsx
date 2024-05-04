import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Subscribe to Our <span className="text-coral-red">Newsletter</span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray text-center text-lg">
          Get the latest news and updates from us.
        </p>
        <div className="flex flex-row items-center justify-between gap-5 border-2 rounded-md p-2">
          <input placeholder="example@example.com" className="input"></input>
          <Button label="Subscribe" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
