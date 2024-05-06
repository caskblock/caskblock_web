const Item = ({ item, showModal }) => {
  if (!item) return <></>;

  const { media, price, title } = item;

  const handleRedirect = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href=`/products/${item.id}`;
  }

  return (
    <div
      className="relative flex flex-col group !border-0 hover:bg-white hover:border-neutral-200 hover:shadow-md rounded-3xl"
      onClick={() => showModal(item)}
    >
      <div className="relative rounded-3xl w-full h-64 overflow-hidden">
        <img
          src={media}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
        />
      </div>
      <div className="p-4 py-5 space-y-3">
        <h2 className="text-lg font-medium">{title}</h2>
        {price && (
          <>
            <div className="w-2d4 w-full border-b border-neutral-100"></div>
            <div className="flex gap-4 justify-center items-end">
              <div className="pt-3">
                <div className="flex items-baseline border-2 border-green-500 rounded-lg relative py-1.5 md:py-2 px-2.5 md:px-3.5 text-sm sm:text-base font-semibold">
                  <button
                    className="text-green-500 !leading-none"
                  >
                    {price} USDC
                  </button>
                </div>
              </div>
              <div className="pt-3">
                <div className="flex items-baseline border-2 hover:border-black rounded-lg relative py-1.5 md:py-1 px-2.5 md:px-3.5 text-sm sm:text-base font-semibold">
                  <button
                    className="duration-300 nc-Badge inline-flex px-2.5"
                    onClick={handleRedirect}
                  >
                    <span>See details</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
