import labels from '@/utils/formLabels';

const Textfield = ({name, value, onChange, form}) => {

    return (
        <div>  
            <label className="text-base font-medium " data-nc-id="Label">{labels[form][name]}</label>
            <input type="text" id={name} name={name} value={value} className={`mt-1.5 flex block w-full rounded-2xl text-sm font-normal h-11 px-4 py-3 border`} onChange={onChange}/>
        </div>
    );
};

export default Textfield;