import {NavLink} from "react-router-dom";

export const NavLinkComponent = (props: {
    navigateto: string,
    text: string
}) => {
    return (
        <NavLink to={props.navigateto} {...props}
                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            {props.text}
        </NavLink>
    );
};