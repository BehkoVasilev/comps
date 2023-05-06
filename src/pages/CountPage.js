import Button from "../components/Button";
import useCounter from "../hooks/useCounter";

function CountPage({ initialCount }) {
    const { count, increment } = useCounter(initialCount);

    return <div>
        Count is {count}
        <Button onClick={increment}>Increment</Button>
    </div>
};

export default CountPage