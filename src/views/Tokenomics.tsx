import { motion } from "framer-motion";

const Tokenomics = () => {
  return (
    <section className="w-full h-auto px-5 relative flex pb-20">
      <div className="flex relative w-full sm:mt-0">

        <img
          src="/newbase.webp"
          alt="Head"
          className="absolute w-[30rem] h-full -translate-x-32 top-0 sm:block hidden opacity-30 lg:opacity-100"
        />

        <div className="flex items-center justify-center flex-col mx-auto w-full left-0 right-0 z-10 mt-32">
          <h1 className="md:text-8xl sm:text-7xl text-5xl font-primary text-primary stroked uppercase">
            Tokenomics
          </h1>

          <div className="max-w-[50rem] w-full  mt-14 pt-10">
            <div className="relative w-full">
              <motion.img
                initial={{ y: -40 }}
                animate={{ rotate: [-10, 20, 20, -10, 10, -5] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                src="/misha1.webp"
                alt="misha"
                className="absolute left-0 w-44 top-0 md:block hidden"
              />
              <motion.img
                initial={{ scaleX: -1, y: -40 }}
                animate={{ rotate: [-10, 20, 20, -10, 10, -5] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                src="/misha2.webp"
                alt="misha"
                className="absolute right-0 w-44 top-0 md:block hidden"
              />
              <div className="w-full rounded-3xl border-2 border-black p-5 bg-primary sm:py-8 py-6">
                <h1 className="stroked-light text-white  font-primary text-3xl font-bold text-center relative z-10">
                  Contract Address
                </h1>

                <p className="font-secondary text-center relative z-10 sm:text-base text-sm">
                  0x00000000000000000000000000
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-4 w-full flex-col md:flex-row">
              <div className="w-full h-auto p-5 sm:py-8 py-6 bg-primary border-2 border-black rounded-3xl">
                <h1 className="stroked-light text-white  font-primary text-3xl font-bold text-center">
                  Total Supply
                </h1>

                <p className="font-secondary text-center">10,000,000,000</p>
              </div>
              <div className="w-full h-auto p-5 sm:py-8 py-6 bg-primary border-2 border-black rounded-3xl">
                <h1 className="stroked-light text-white  font-primary text-3xl font-bold text-center">
                  Buy & Sell Tax
                </h1>

                <p className="font-secondary text-center">2/2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
