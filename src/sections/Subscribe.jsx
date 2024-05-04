import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section>
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-4xl font-palanquin font-bold">
          Subscribe to Our <span className="text-coral-red">Newsletter</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:border-2 md:rounded-md md:p-2 max-w-4xl">
          <input placeholder="example@example.com" className="input"></input>
          <Button label="Subscribe" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
