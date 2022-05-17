import { NavLink } from "react-router-dom";
import { classNames, navigation } from "./Navbar";

export const NavbarDrawer = () => {
    return (
        <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
                {navigation.map((item) => (

                    <NavLink key={item.name}
                        to={item.href}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        >
                            {item.name}
                    </NavLink>

                ))}
            </div>
        </div>
    );
}