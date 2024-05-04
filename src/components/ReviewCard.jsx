import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-1 flex-col w-full rounded-2xl shadow-3xl justify-center items-center p-14 max-w-[400px] md:max-h-[400px] gap-4 bg-white">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-center object-cover w-[120px] h-[120px] p-1 border-4 border-coral-red"
      />
      <p className="mt-2 font-montserrat leading-normal text-slate-gray text-center font-semibold">
        {feedback}
      </p>
      <div className="flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {rating}
        </p>
      </div>
      <h3 class="mt-2 text-2xl leading-normal font-semibold font-palanquin text-coral-red">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
