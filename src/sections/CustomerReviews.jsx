import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
  return (
    <section id="customer-reviews" className="max-container max-sm:mt-12">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray text-center text-lg">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="mt-16 grid sm:grid-cols-2 grid-cols-1 gap-14 sm:place-items-center justify-evenly">
        {reviews.map((review, i) => (
          <ReviewCard key={`review-${i}`} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
