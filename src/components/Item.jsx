const Item = ({ item, showModal }) => {
  if (!item) return <></>;

  const { media, price, title, token_id, copies, issuedCount, id, burnWindowStart, burnWindowEnd } = item;

  const handleRedirect = () => {
    window.location.href=`/products/${id}`
  };

  const dateToday = new Date().getTime();
  const overStartDate = burnWindowStart === "" || Date.parse(burnWindowStart) <= dateToday;
  const underEndDate = burnWindowEnd === "" || (Date.parse(burnWindowEnd) + (24 * 60 * 60 * 1000)) > dateToday;

  const isOutsideBurnWindow = !overStartDate || !underEndDate;

  const availableAmount = issuedCount ? copies - issuedCount : copies;
  const isSoldOut = availableAmount <= 0;

  return (
    <div
      className="relative flex flex-col group !border-0 bg-white hover:border-neutral-200 hover:shadow-md rounded-3xl"
      onClick={price ? handleRedirect : null}
    >
      <div className="relative rounded-3xl w-full h-72 overflow-hidden">
        <img
          src={media}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
        />
      </div>
      <div className="p-4 py-5 space-y-3">
        <div className="flex gap-4 justify-between items-center">
          <h2 className="text-lg font-medium">{title} {token_id}</h2>
          {copies &&
            <p className="text-sm text-neutral-500">
              {availableAmount}/{copies}
            </p>}
        </div>
        {price ? (
          <>
            <div className="w-2d4 w-full border-b border-neutral-100"></div>
            <div className="flex gap-4 justify-center items-end">
              <div className="pt-3">
                <div className={`flex items-baseline border-2 ${isSoldOut ? 'bg-gray-100 border-gray-200 hover:border-gray-200' : 'active-price'} rounded-lg relative py-1.5 md:py-2 px-2.5 md:px-3.5 text-sm sm:text-base font-semibold`}>
                  <button
                    className={`${isSoldOut ? 'text-gray-400' : 'active-price'} !leading-none`}
                    onClick={(evt) => { evt.stopPropagation(); showModal(item); }}
                    disabled={isSoldOut}
                  >
                    {price} USDC
                  </button>
                </div>
              </div>
              <div className="pt-3">
                <div className="flex items-baseline border-2 hover:border-black rounded-lg relative py-1.5 md:py-1 px-2.5 md:px-3.5 text-sm sm:text-base font-semibold">
                  <button
                    className="duration-300 inline-flex px-2.5"
                    onClick={handleRedirect}
                  >
                    <span>See details</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-2d4 w-full border-b border-neutral-100"></div>
            <div className="flex gap-4 justify-center items-end">
              <div className="pt-3">
                <div className={`flex items-baseline border-2 rounded-lg relative py-1.5 md:py-1 px-2.5 md:px-3.5 text-sm sm:text-base font-semibold ${isOutsideBurnWindow ? 'bg-gray-100 border-gray-200 hover:border-gray-200' : 'hover:border-black'}`}>
                  <button
                    className={`duration-300 inline-flex px-2.5 ${isOutsideBurnWindow ? 'text-gray-400' : 'text-black'}`}
                    onClick={() => showModal(item)}
                    disabled={isOutsideBurnWindow}
                  >
                    <span>Redeem</span>
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
