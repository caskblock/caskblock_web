"use client";

const labels = {
  heading1: "Meet CaskBlock",
  heading2: "Connecting tradition with technology",
  heading3: "Trade, sell or auction Real World Assets",
  text1: "CaskBlock aims to revolutionize the whisky market by providing a direct, secure and transparent connection between independent whisky distilleries and consumers, enabling genuine appreciation of the craft and a sound investment opportunity.",
  text2: "CaskBlock connects traditional whisky distilleries with modern digital technologies through blockchain. This integration ensures that transactions are transparent, seamless, trustworthy, and immutable. By using blockchain, CaskBlock ensures that each transaction is recorded and immutable, thereby increasing confidence among buyers and sellers.  ",
  text3: "CaskBlock is a platform where independent whisky distilleries and whisky owners can sell, trade or auction their casks and bottles directly to customers, collectors, and investors. Unlike traditional marketplaces or online shops, CaskBlock is a specialized platform targeting a new generation of investors used to dealing with digital and volatile assets but looking for something more tangible and stable, like a real-world asset.",
}
const About = () => {

  return (
    <div id="about" className="w-full">

      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-14 items-center relative text-center lg:text-left">
        <div className="w-screen max-w-full xl:max-w-xl space-y-5 lg:space-y-10">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl">
            {labels.heading1}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000">
            {labels.text1}
          </span>
        </div>
        <div className="flex-grow">
        </div>
      </div>

      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-14 items-center relative text-center lg:text-left">
        <div className="flex-grow">
        </div>

        <div id="about-section-middle" className="w-screen max-w-full xl:max-w-xl space-y-5 lg:space-y-10">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl">
            {labels.heading2}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000">
            {labels.text2}
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-14 items-center relative text-center lg:text-left">
        <div className="w-screen max-w-full xl:max-w-xl space-y-5 lg:space-y-10">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl">
            {labels.heading3}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000">
            {labels.text3}
          </span>
        </div>
        <div className="flex-grow">
        </div>
      </div>




    </div>
  );
};

export default About;
