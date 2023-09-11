import Button from "../components/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-screen h-auto px-5 relative flex">
      <a href="" target="_blank" rel="noopener noreferrer" className="">
        <button className="absolute right-0 top-5">
          <img src="/whitepaper.webp" alt="Whitepaper" className="" />
        </button>
      </a>

      <div className="flex relative w-full">
        <div className="absolute left-0 top-0 h-full flex-col opacity-30 lg:opacity-100 sm:flex hidden">
          <img src="/head.webp" alt="Head" className="h-1/2" />
          <img src="/body.webp" alt="Head" className="h-1/2" />
        </div>
        <div className="w-fit flex items-center justify-center mx-auto flex-col relative z-10">
          <div className="w-full -mt-20 sm:mt-0">
            <img
              src="/herologo.webp"
              alt="HeroLogo"
              className="lg:w-80 sm:w-64 w-44 mx-auto"
            />
            <p className="font-secondary max-w-[45rem] font-semibold sm:text-base text-sm mx-auto lg:mx-0 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button className="mt-7 mx-auto block">Buy Token</Button>
          </div>
          <div className="flex">
            <motion.img
              animate={{ rotate: [-10, 20, 20, -10, 10, -5] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              src="/hero.webp"
              alt="Hero"
              className="lg:block hidden w-72 mt-20"
            />
            <motion.img
            initial={{scaleX: -1}}
              animate={{ rotate: [-10, 20, 20, -10, 10, -5], scaleX: -1 }}
              transition={{ duration: 0.5, repeat: Infinity }}
              src="/hero.webp"
              alt="Hero"
              className="lg:block hidden w-72 mt-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
