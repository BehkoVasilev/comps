import Table from "./Table"

function SortableTable(props) {
    const { config } = props;

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column
        };

        return {
            ...column,
            header: () => <th className="p-2">{column.label} Is Sortable</th>
        }
    });
    //when we pass config={updatedConfig} like that the config prop in {...props} will be overwritten
    return <Table {...props} config={updatedConfig} />
};

export default SortableTable;