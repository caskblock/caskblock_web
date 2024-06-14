
const Attribute = ({label, value}) => {
  return (
    <>
      <div className="attribute-label flex items-center justify-between w-full px-4 py-2 font-medium text-left rounded-lg">
        <span>{label}</span>
      </div>
      <div className="p-4 pt-3 last:pb-0 text-slate-600 text-sm">
        {value}
      </div>
    </>
  );
};

export default Attribute;
