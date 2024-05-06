const LoadingItem = () => {
  const products = Array.from(Array(12).keys());

  return (
    <>
      {products.map((productKey) => (
        <div key={productKey} className="flex items-center justify-center ">
          <div className="w-full h-72 bg-slate-900 animate-pulse rounded-xl shadow-xl" />
        </div>
      ))}
    </>
  );
};

export default LoadingItem;