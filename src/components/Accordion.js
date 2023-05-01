function Accordion({
    items
}) {

    const renderItems = items.map((item) => {
        return (
            <dir key={item.id}>
                <div>{item.label}</div>
                <div>{item.content}</div>
            </dir>)
    })
    return (
        <div>
            {renderItems}
        </div>

    )
}

export default Accordion;