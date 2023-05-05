import { useState } from "react";
import Table from "./Table"

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const { config } = props;

    const handleClick = (label) => {
        console.log(label);
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
    return <Table {...props} config={updatedConfig} />
};

export default SortableTable;