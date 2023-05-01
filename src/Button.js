import className from 'classnames';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {
    const classes = className('px-3 py-1.5 border', {
        'border-blue-600 bg-blue-500 text-white': primary
    });

    return <button className={classes}>{children}</button>
};

Button.propTypes = {
    chechVariationOfTheButton: ({ primary, secondary, success, warning, danger }) => {
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