const About = () => {
  return (
    <section className="w-full min-h-screen h-auto px-5 relative flex">
      <div className="flex relative w-full">
        <div className="absolute left-0 top-0 h-full flex-col opacity-30 lg:opacity-100 sm:flex hidden">
          <img src="/body.webp" alt="Head" className="h-1/2" />
          <img src="/body.webp" alt="Head" className="h-1/2" />
        </div>

        <div className="flex items-center justify-center flex-col mx-auto w-fit left-0 right-0 z-10 mt-20">
          <h1 className="md:text-8xl sm:text-7xl text-6xl font-primary text-primary stroked">
            ABOUT
          </h1>

          <div className="w-[90%] h-auto md:p-20 sm:p-10 p-5 bg-primary mt-10 relative border-4 border-black">
            <img
              src="/about/misha1.webp"
              alt="Misha1"
              className="absolute top-5 left-0 lg:opacity-100 opacity-10"
            />
            <img
              src="/about/misha2.webp"
              alt="Misha2"
              className="absolute bottom-5 right-0 lg:opacity-100 opacity-10"
            />
            <img
              src="/about/line.webp"
              alt="Line"
              className="absolute top-0 left-0 w-full -translate-y-1/2 scale-x-105"
            />
            <img
              src="/about/line.webp"
              alt="Line"
              className="absolute bottom-0 left-0 w-full translate-y-1/2 scale-x-105"
            />

            <img
              src="/about/line2.webp"
              alt="Line"
              className="absolute top-0 left-0 -translate-x-1/2 h-full scale-y-105  md:w-auto w-8"
            />

            <img
              src="/about/line2.webp"
              alt="Line"
              className="absolute top-0 right-0 translate-x-1/2 h-full scale-y-105 md:w-auto w-8"
            />

            <h1 className="stroked-light text-white font-primary text-4xl text-center relative z-10 font-bold">
              Who is Misha
            </h1>

            <div className="flex flex-col gap-y-5 text-center mt-5 font-secondary max-w-[55rem] mx-auto relative z-10">
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
