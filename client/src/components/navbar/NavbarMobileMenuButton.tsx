import { Disclosure } from "@headlessui/react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

type Props = {
    isOpen: Boolean
}

const NavbarMobileMenuButton = ({isOpen}: Props) => {
    return(
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                
            {/* Mobile menu button */}
            <Disclosure.Button className="sm:hidden inline-flex items-center justify-center 
            p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                    <MenuAlt1Icon className="block h-6 w-6" aria-hidden="true" />
                )}
            </Disclosure.Button>
            
        </div>
    );
}

export default NavbarMobileMenuButton;