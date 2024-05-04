import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Walk Your World in Style! Explore our Collection of Comfort and Class
          for Every Step You Take.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-col-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:place-items-center">
        {products.map((product, i) => (
          <PopularProductCard
            key={`product-${i}`}
            {...product}
          ></PopularProductCard>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
