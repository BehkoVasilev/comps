import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option.label);
    };

    const options = [
        { label: 'Green', value: 'green' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Red', value: 'red' },
    ];

    return (
        <div>
            <Dropdown
                value={selection}
                onChange={handleSelect}
                options={options}
            />
        </div>
    );
};

export default App