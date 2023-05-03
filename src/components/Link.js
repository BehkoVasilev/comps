import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";


function Link({ to, children }) {
    const { navigate } = useNavigation();

    const classes = classNames('text-blue-600 mr-2 bg-orange-300')
    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey){
            return
        };
        e.preventDefault();

        navigate(to);
    };

    return (
        <a className={classes} href={to} onClick={handleClick}>{children}</a>
    );
};

export default Link