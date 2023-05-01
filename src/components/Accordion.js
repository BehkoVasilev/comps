import { useState } from "react";

function Accordion({
    items
}) {
    const [expandedIndex, setExpandedInex] = useState(null);

    // const handleClick = (e) => {
    //     const array = items.map((item) => item.label);
    //     const index = array.indexOf(e.currentTarget.textContent);

    //     if (index === expandedIndex){
    //         return setExpandedInex(null)
    //     }
    //     setExpandedInex(index);
    // }

    const renderItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        return (
            <dir key={item.id}>
                <div onClick={() => index === expandedIndex ? setExpandedInex(null) : setExpandedInex(index)} >{item.label}</div>
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