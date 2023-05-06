import { useEffect, useState } from "react";

function useCounter(initValues) {
    const [count, setCount] = useState(initValues);

    useEffect(() => {
        console.log(count);
    }, [count])

    const increment = () => {
        setCount(count => count + 1);
    };
    
    return {
        count,
        increment
    }
};

export default useCounter;