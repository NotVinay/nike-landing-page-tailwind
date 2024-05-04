import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-row justify-between flex-wrap gap-10">
        <div className="flex flex-col gap-6">
          <a href="/" className="cursor-pointer">
            <img src={footerLogo} alt="footer logo" width={125} />
          </a>
          <p className="max-w-sm font-montserrat text-white-400">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex flex-row gap-4">
            {socialMedia.map((s) => (
              <a className="bg-white rounded-full p-2 cursor-pointer">
                <img src={s.src} alt={s.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
        {footerLinks.map((f) => (
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold font-palanquin">{f.title}</h4>
            <ul>
              <div className="mt-4 flex flex-col gap-3">
                {f.links.map((l) => (
                  <li className="text-white hover:text-slate-gray font-montserrat text-base leading-normal cursor-pointer">
                    <a href={l.link}>{l.name}</a>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-between text-white-400">
        <div className="flex flex-row gap-2 font-montserrat text-sm">
          <img src={copyrightSign} alt="copyright" />
          <p>All rights reserved.</p>
        </div>
        <p className="font-montserrat text-sm">
          <a
            className="text-white hover:text-slate-gray font-montserrat cursor-pointer"
            href="/"
          >
            Terms of Use
          </a>{" "}
          |{" "}
          <a
            className="text-white-400 hover:text-slate-gray font-montserrat cursor-pointer"
            href="/"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
