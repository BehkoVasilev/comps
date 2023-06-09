import className from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = twMerge(className(
        //     rest.className,
        //     'flex items-center px-3 py-1.5 border', {
        //     'border-blue-600 bg-blue-500 text-white': primary,
        //     'border-gray-900 bg-gray-800 text-white': secondary,
        //     'border-green-600 bg-green-500 text-white': success,
        //     'border-yellow-600 bg-yellow-500 text-white': warning,
        //     'border-red-600 bg-red-500 text-white': danger,
        //     'rounded-full': rounded,
        //     'bg-white': outline,
        //     'text-blue-600': outline && primary,
        //     'text-gray-900': outline && secondary,
        //     'text-green-600': outline && success,
        //     'text-yellow-600': outline && warning,
        //     'text-red-600': outline && danger,
        // }
        `
        flex items-center px-3 py-1.5 border
        ${primary ? 'border-blue-600 bg-blue-500 text-white' : ''}
        ${secondary ? 'border-gray-900 bg-gray-800 text-white' : ''}
        ${success ? 'border-green-600 bg-green-500 text-white' : ''}
        ${warning ? 'border-yellow-600 bg-yellow-500 text-white' : ''}
        ${danger ? 'border-red-600 bg-red-500 text-white' : ''}
        ${rounded ? 'rounded-full' : ''}
        ${outline ? 'bg-white' : ''}
        ${outline && primary ? 'text-blue-600' : ''}
        ${outline && secondary ? 'text-gray-900' : ''}
        ${outline && success ? 'text-green-600' : ''}
        ${outline && warning ? 'text-yellow-600' : ''}
        ${outline && danger ? 'text-red-600' : ''}
        ${rest.className ?? ''}
        `
    ));

    return <button {...rest} className={classes}>{children}</button>
};

Button.propTypes = {
    checkVariationOfTheButton: ({ primary, secondary, success, warning, danger }) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be true')
        }
    }
}

export default Button