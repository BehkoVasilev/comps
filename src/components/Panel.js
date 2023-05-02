import classNames from "classnames";
import { twMerge } from "tailwind-merge";

function Panel({
    children,
    className,
    ...rest
}) {
    const finalClassNames = twMerge(classNames(
        'w-full text-white cursor-pointer border rounded shadow p-3',
        className
    ));

    return <div {...rest} className={finalClassNames}>{children}</div>
};

export default Panel;