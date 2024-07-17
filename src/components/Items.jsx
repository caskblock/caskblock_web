import LoadingItem from "./LoadingItem";
import Item from "./Item";
import DistilleryCard from "./DistilleryCard"
const Items = ({data, showModal=null, idDistilleries=false}) => {
  return (
    <div className="w-full items-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
        {data.length === 0  ? (
          <LoadingItem />
        ) : (
          data?.map((item, index) => (
            idDistilleries ? (
              <DistilleryCard key={index} item={item} />
            ) : (
              <Item key={index} item={item} showModal={showModal} />
            )
          ))
        )}
      </div>
    </div>
  );
};

export default Items;
