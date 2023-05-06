import useSort from "../hooks/useSort-";
import Table from "./Table"
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

function SortableTable(props) {
    const { config, data } = props;

    const {
        sortedData,
        sortOrder,
        sortBy,
        setSortColumn } = useSort(config, data);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column
        };

        return {
            ...column,
            header: () =>
                <th onClick={() => setSortColumn(column.label)} className="cursor-pointer hover:bg-gray-200">
                    <div className="flex items-center">
                        {getIcon(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
        }
    });
    //when we pass config={updatedConfig} like that the config prop in {...props} will be overwritten
    return <Table {...props} data={sortedData} config={updatedConfig} />
};

function getIcon(label, sortBy, sordOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    };

    if (sordOrder === null) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    } else if (sordOrder === 'asc') {
        return <div>
            <GoArrowSmallUp />
        </div>
    } else if (sordOrder === 'desc') {
        return <div>
            <GoArrowSmallDown />
        </div>
    };
};

export default SortableTable;