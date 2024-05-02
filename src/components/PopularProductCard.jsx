import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full rounded-lg shadow-md justify-center items-center p-3 max-w-[280px]">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {rating}
        </p>
      </div>
      <h3 class="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p class="mt-2 text-coral-red text-2xl font-montserrat font-semibold">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
