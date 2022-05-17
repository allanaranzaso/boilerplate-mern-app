import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { classNames } from "./Navbar";

const profileNavList = [
    { name: 'Your Profile', href: 'profile' },
    { name: 'Settings', href: 'settings' },
    { name: 'Sign out', href: 'logout'}
]

/**
 * 
 * @returns the navbar profile dropdown menu list
 */
const NavbarProfileList = () => {
    return(
        
        <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        >
        <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {
                profileNavList.map( (item, index) => (
                    <Menu.Item key={index}>
                        {({ active }) => (

                            <NavLink 
                                to={item.href}
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >
                                {item.name}
                            </NavLink>
                            
                        )}
                    </Menu.Item>
                ))
            }
        </Menu.Items>
    </Transition>
    );
    
}

export default NavbarProfileList;