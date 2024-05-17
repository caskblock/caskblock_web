import HowTo from "./HowTo";
import ProductsPage from "./ProductsPage";

const LandingPage = () => {
  
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <div className="flex flex-col lg:flex-row lg:items-center bg-[url('/banner.jpg')] bg-no-repeat bg-cover bg-center w-full px-6 py-6 lg:px-24 lg:py-24 rounded-3xl">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 lg:mr-10 xl:mr-0">
          <h2 className="font-semibold text-4xl md:text-5xl xl:text-6xl !leading-[114%] text-white">
            Buy and sell NFTs backed by real asset.
          </h2>
          <span className="text-base md:text-lg text-white">
            PWX cross the line between the digital and physical world. <br />
            By purchasing our NFTs you have exclusive access to whiskey casks,
            whiskey bottles and other unique offers.
            <br />
            You can invest to make some profit or just for the excitement of
            having your own whiskey.
          </span>
        </div>
        <div className="flex-grow">
          <img src="/logo.png" alt="banner" className="w-full " />
        </div>
      </div>

      <HowTo />

      <div className="w-full bg-neutral-100 lg:py-32 py-20 px-12 mt-24 rounded-3xl">
        <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-14">
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
