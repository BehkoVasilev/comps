// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: '5', class: 'A' },
        { name: 'Apple', color: 'bg-red-500', score: '2', class: 'B'},
        { name: 'Banana', color: 'bg-yellow-400', score: '1', class: 'A' },
        { name: 'Lime', color: 'bg-green-600', score: '3', class: 'C' },
    ]

    const config = [
        {
            label: 'Fruits',
            render: (fruit) => fruit.name
        },
        { 
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
        },
        { 
            label: 'Score',
            render: (fruit) => fruit.score
        },
        {
            label: 'Class',
            render: (fruit) => fruit.class
        }
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    }

    return (
        <SortableTable data={data} config={config} keyFn={keyFn} />
    );
};

export default TablePage;