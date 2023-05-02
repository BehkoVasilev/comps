import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";


function Dropdown({
    options,
    onChange,
    value
}) {
    const [isOpen, setIsOpen] = useState(false);

    const classes = twMerge(classNames(`
        w-full bg-slate-700 text-white justify-between flex items-center cursor-pointer p-3 border-2 border-slate-800 rounded shadow 
        ${value === 'Green' ? 'bg-green-600' : ''}
        ${value === 'Red' ? 'bg-red-600' : ''}
        ${value === 'Yellow' ? 'bg-yellow-400' : ''}
    `));

    const optionClasses = {
        0: 'w-full text-white bg-green-600 cursor-pointer p-3',
        1: 'w-full text-white bg-yellow-500 cursor-pointer p-3',
        2: 'w-full text-white bg-red-600 cursor-pointer p-3'
    }


    const handleSelectClick = () => {
        setIsOpen((current) => !current);
        // setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    };

    const icon = <span className="text-2xl">{isOpen ? <GoChevronDown /> : <GoChevronLeft />}</span>;

    const renderOptions = options.map((option, index) => {

        return (
            <div onClick={() => handleOptionClick(option)} key={option.value} className={optionClasses[index]}>{option.label}</div>
        )
    });

    return (
        <div className="w-48 relative">
            <div className={classes} onClick={handleSelectClick}>
                {value || "Select..."}
                {icon}
            </div>
            {isOpen && <div className="border-2 border-slate-800 rounded shadow-gray-50 w-full mt-1" >{renderOptions}</div>}
        </div>
    );
};

export default Dropdown;