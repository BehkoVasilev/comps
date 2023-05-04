import Table from "../components/Table";

function TablePage () {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: '5' },
        { name: 'Apple', color: 'bg-red-500', score: '2' },
        { name: 'Banana', color: 'bg-yellow-400', score: '1' },
        { name: 'Lime', color: 'bg-green-600', score: '3' },
    ]

    return (
        <Table data={data}/>
    );
};

export default TablePage;