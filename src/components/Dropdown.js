import { useState } from "react";

function Dropdown({
    options,
    onSelect,
    selection
}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectClick = () => {
        setIsOpen((current) => !current);
        // setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onSelect(option);
    };

    const renderOptions = options.map((option) => {

        return (
            <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
        )
    });

    return (
        <div>
            <div onClick={handleSelectClick}>{selection ? selection : "Select..."}</div>
            {isOpen && <div>{renderOptions}</div>}
        </div>
    );
};

export default Dropdown;