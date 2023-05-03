import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({
    items
}) {
    const [expandedIndex, setExpandedInex] = useState(null);

    const handleClick = (inx) => {
        //Functional version: use if NEW value depends on OLD
        setExpandedInex(current => {
            if (inx === current) {
                return null
            } else {
                return inx
            }
        })
        // if (inx === expandedIndex) {
        //     setExpandedInex(null)
        // } else {
        //     setExpandedInex(inx);
        // }
    };

    const renderItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>;
        
        return (
            <dir className='m-0.5 p-0' key={item.id}>
                <div onClick={() => handleClick(index)} className="w-1/2 justify-between flex items-center border-2 border-black bg-slate-700 text-white cursor-pointer">
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