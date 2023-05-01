import { useState } from "react";

function Accordion({
    items
}) {
    const [expandedIndex, setExpandedInex] = useState(null);

    const handleClick = (inx) => {
        if (inx === expandedIndex){
            return setExpandedInex(null)
        }
        setExpandedInex(inx);
    }

    const renderItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        return (
            <dir key={item.id}>
                <div onClick={() => handleClick(index)} >{item.label}</div>
                {/* <div onClick={() => index === expandedIndex ? setExpandedInex(null) : setExpandedInex(index)} >{item.label}</div> */}
                {isExpanded && <div>{item.content}</div>}
            </dir>)
    })
    return (
        <div>
            {renderItems}
        </div>

    )
}

export default Accordion;