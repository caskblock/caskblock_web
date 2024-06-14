"use client";

const Hero = () => {

  return (
    <div id="hero" className="bg-[url('/banner.jpg')] bg-no-repeat bg-cover bg-center w-full rounded-3xl">
      <div id="headline" className="bg-[url('/headline.png')] bg-no-repeat  bg-cover bg-center w-full">
        {/* <h2 className="font-semibold text-4xl md:text-5xl xl:text-6xl !leading-[114%] text-white">
          Buy and sell NFTs backed by real asset.
        </h2>
        <span className="text-base md:text-lg text-white">
          PWX cross the line between the digital and physical world. <br />
          By purchasing our NFTs you have exclusive access to whiskey casks,
          whiskey bottles and other unique offers.
          <br />
          You can invest to make some profit or just for the excitement of
          having your own whiskey.
        </span> */}
      </div>
      {/* <div className="flex-grow">
        <img src="/logo.png" alt="banner" className="w-full " />
      </div> */}
    </div>
  );
};

export default Hero;
