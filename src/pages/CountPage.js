import Button from "../components/Button";
import useCounter from "../hooks/useCounter";
import Panel from "../components/Panel";

function CountPage({ initialCount }) {
    const {
        count,
        valueToAdd,
        increment,
        decrement,
        updateValue,
        addValue
    } = useCounter(initialCount);

    return <Panel className="m-3">
        <h1 className="text-lg">Count is {count}</h1>
        <div className="flex flex-row my-2">
            <Button onClick={increment}>Increment</Button>
            <Button className="ml-5" onClick={decrement}>Decrement</Button>
        </div>
        <form onSubmit={addValue}>
            <label>Add a lot</label>
            <input
                className="border m-3 p-1 bg-gray-50 border-gray-300"
                type="number"
                value={valueToAdd || ""}
                onChange={updateValue}
            />
            <Button>Add it</Button>
        </form>
    </Panel>
};

export default CountPage