import { useState } from "react";
import Table from "./Table"

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const { config, data } = props;

    const handleClick = (label) => {
        if (sortBy !== label) {
            setSortOrder('asc');
            setSortBy(label);
            return
        };

        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        };
    }

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column
        };

        return {
            ...column,
            header: () =>
                <th onClick={() => handleClick(column.label)} className="p-2">
                    {column.label} Is Sortable
                </th>
        }
    });

    let sortedData = data;

    if (sortOrder && sortBy){
        const { sortValue} = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            
            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if ( typeof(valueA) === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        })
    }

    //when we pass config={updatedConfig} like that the config prop in {...props} will be overwritten
    return <Table {...props} data={sortedData} config={updatedConfig} />
};

export default SortableTable;