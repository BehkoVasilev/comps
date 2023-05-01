import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function Accordion({
    items
}) {
    const [expandedIndex, setExpandedInex] = useState(null);

    const handleClick = (inx) => {
        if (inx === expandedIndex) {
            return setExpandedInex(null)
        }
        setExpandedInex(inx);
    };

    const renderItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span>{isExpanded ? <GoChevronUp /> : <GoChevronDown />}</span>
        console.log(icon);
        return (
            <dir className='m-1' key={item.id}>
                <div onClick={() => handleClick(index)} className="w-1/2 justify-between flex items-center border-2 border-black bg-slate-700 text-white">
                    {item.label}
                    {icon}
                </div>
                {/* <div onClick={() => index === expandedIndex ? setExpandedInex(null) : setExpandedInex(index)} >{item.label}</div> */}
                {isExpanded && <div className="w-1/2 border border-gray-600 bg-slate-400">{item.content}</div>}
            </dir>)
    })
    return (
        <div>
            {renderItems}
        </div>

    )
}

export default Accordion;