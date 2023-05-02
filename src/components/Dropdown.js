import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";


function Dropdown({
    options,
    onChange,
    value
}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectClick = () => {
        setIsOpen((current) => !current);
        // setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    };

    const icon = <span>{isOpen ? <GoChevronDown /> : <GoChevronLeft />}</span>;

    const renderOptions = options.map((option) => {

        return (
            <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
        )
    });

    return (
        <div>
            <div className="w-32 bg-slate-700 text-white justify-between flex items-center" onClick={handleSelectClick}>
                {value || "Select..."}
                {icon}
            </div>
            {isOpen && <div>{renderOptions}</div>}
        </div>
    );
};

export default Dropdown;