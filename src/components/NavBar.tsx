import {NavLink} from "react-router-dom";
import tripIcon from "../assets/icons/icons8-trip-48.png"
import {ButtonFilledComponent} from "./ButtonFilledComponent.tsx";
import {UseLocalStorageObserver} from "../hooks/UseLocalStorageObserver.tsx";
import {NavLinkComponent} from "./NavLinkComponent.tsx";

export const NavBar = () => {
    const {data, userExists} = UseLocalStorageObserver();
    return (
        <nav
            className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 tracking-widest">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={tripIcon} className="h-8" alt="Trip Logo"/>
                    <span
                        className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Triplans</span>
                </NavLink>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {userExists ? <NavLink to="user">{data!.name}</NavLink> : <NavLink to="auth">
                        <ButtonFilledComponent text="Get Started"/>
                    </NavLink>}
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                     >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <NavLinkComponent navigateto="/" text="Home"/>
                        <NavLinkComponent navigateto="about" text="About"/>
                        <NavLinkComponent navigateto="services" text="Services"/>
                        <NavLinkComponent navigateto="auth" text="Plan your trip"/>
                    </ul>
                </div>
            </div>
        </nav>
    );
};