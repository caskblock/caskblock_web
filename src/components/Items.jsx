import LoadingItem from "./LoadingItem";
import Item from "./Item";

const Items = ({nftsData, showModal}) => {
  return (
    <div className="w-full items-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10  mt-8 lg:mt-10">
        {nftsData.length === 0  ? (
          <LoadingItem />
        ) : (
          nftsData?.map((nft, index) => (
            <Item key={index} item={nft} showModal={showModal} />
          ))
        )}
      </div>
    </div>
  );
};

export default Items;
