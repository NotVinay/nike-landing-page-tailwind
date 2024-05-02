import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container mt-18 flex flex-col gap-6">
      {services.map((service, i) => (
        <div
          key={`service-${i}`}
          className="flex flex-col p-16 shadow-3xl rounded-[22px]"
        >
          <div className="bg-coral-red w-12 h-12 rounded-full flex justify-center items-center">
            <img
              src={service.imgURL}
              alt={service.label}
              width={24}
              height={24}
            />
          </div>
          <p className="mt-6 font-montserrat text-2xl font-bold leading-normal">
            {service.label}
          </p>
          <p className="mt-4 info-text">{service.subtext}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
