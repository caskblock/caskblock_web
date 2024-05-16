const DistilleryCard = ({ item }) => {
  if (!item) return <></>;

  const { media, title, slug, hasProducts } = item;

  const handleRedirect = () => {
    window.location.href=`/distilleries/${slug}`
  };

  const isDisabled = !hasProducts;

  return (
    <div
      className="relative flex flex-col group !border-0 bg-white hover:border-neutral-200 hover:shadow-md rounded-3xl bg-neutral-100"
    >
      <div className="relative rounded-3xl w-full h-64 overflow-hidden">
        <img
          src={media || "/logo.png"}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
        />
      </div>
      <div className="p-4 py-5 space-y-3">
        <div className="flex gap-4 justify-between items-center">
          <h2 className="text-lg font-medium">{title}</h2>
        </div>
        <div className="w-2d4 w-full border-b border-neutral-100"></div>
        <div className="flex gap-4 justify-center items-end">
          <div className="pt-3">
          <div className={`flex items-baseline border-2 rounded-lg relative py-1.5 md:py-1 px-2.5 md:px-3.5 text-sm sm:text-base font-semibold ${isDisabled} ? 'bg-gray-100 border-gray-200 hover:border-gray-200' : 'hover:border-black'}`}>
              <button
                className="duration-300 nc-Badge inline-flex px-2.5"
                onClick={handleRedirect}
                disabled={isDisabled}
              >
                <span>See Products</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistilleryCard;
