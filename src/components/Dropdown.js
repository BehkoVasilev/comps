import { useEffect, useRef, useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Panel from "./Panel";


function Dropdown({
    options,
    onChange,
    value
}) {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef();

    const classes = twMerge(classNames(`
         bg-slate-700 justify-between flex items-center
        ${value === 'Green' ? 'bg-green-600' : ''}
        ${value === 'Red' ? 'bg-red-600' : ''}
        ${value === 'Yellow' ? 'bg-yellow-400' : ''}
    `));

    const optionClasses = {
        0: 'hover:bg-green-600 p-1 rounded',
        1: 'hover:bg-yellow-500 p-1 rounded',
        2: 'hover:bg-red-600 p-1 rounded'
    }

    useEffect(() => {
        const handler = (e) => {
            // console.log(dropdownRef.current);
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        // return () => {
        //     document.removeEventListener('click', handler)
        // }


    },[])
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
        <div className="w-48 relative" ref={dropdownRef}>
            <Panel className={classes} onClick={handleSelectClick}>
                {value || "Select..."}
                {icon}
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full p-0.5 text-grey" >
                    {renderOptions}
                </Panel>)}
        </div>
    );
};

export default Dropdown;