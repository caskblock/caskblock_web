import Hero from "./Homepage/Hero";
import About from "./Homepage/About";
import HowTo from "./Homepage/HowTo";
import ProductsPage from "./ProductsPage";

const LandingPage = () => {

  return (
    <div className="w-full flex flex-col items-start gap-4">
      {/* <div id="hero" className="flex flex-col lg:flex-row lg:items-center bg-[url('/banner.jpg')] bg-no-repeat bg-cover bg-center w-full px-6 py-6 lg:px-24 lg:py-24 rounded-3xl"> */}

      <Hero />

      <About />

      <HowTo />

      <div id="highlights" className="mt-24 pt-14 rounded-3xl w-full">
        <div className="relative flex flex-col sm:flex-row sm:items-end justify-between">
          <div className="flex flex-col items-center text-center w-full max-w-2xl mx-auto">
            <h2 className="flex items-center flex-wrap justify-center text-3xl md:text-4xl 2xl:text-5xl font-semibold">
              Top List of Whiskies
            </h2>
          </div>
        </div>

        <ProductsPage />
      </div>
    </div>
  );
};

export default LandingPage;
