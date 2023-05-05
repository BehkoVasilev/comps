import { useState } from "react";
import Table from "./Table"

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const { config } = props;

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
    //when we pass config={updatedConfig} like that the config prop in {...props} will be overwritten
    return <div>
        {sortOrder} - {sortBy}
        <Table {...props} config={updatedConfig} />
    </div>
};

export default SortableTable;