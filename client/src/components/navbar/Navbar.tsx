import { Disclosure } from "@headlessui/react";
import { NavbarDrawer } from "./NavbarDrawer";
import { NavbarLogo } from "./NavbarLogo";
import NavbarMobileDropdown from "./NavbarMobileDropdown";
import NavbarMobileMenuButton from "./NavbarMobileMenuButton";
import NavbarNotifications from "./NavbarNotifications";
import NavbarProfileMenu from "./NavbarProfileMenu";

// array of navigation links to utilize in the components
export const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Team', href:'/', current: false },
    { name: 'Projects', href:'/', current: false}
]

/**
 * 
 * @param classes 
 * @returns 
 */
export function classNames(...classes: Array<String>) {
    return classes.filter(Boolean).join(' ')
}


const Navbar = () => {
    return(
        // Disclosures are a simple, accessible foundation for building custom UIs that show and hide content
        // in this case, it's used to show the navbar when mobile. "as" property injects into dom for semantics
        <header>
            {/* Change bg of entire navbar here */}
            <Disclosure as="nav" className="bg-gray-800"> 
                {({ open: mobileMenuIsOpen }) => (

                    <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Profile pic & dropdown menu */}
                                <NavbarProfileMenu />
                                <NavbarNotifications />
                            </div>

                            {/* Logo and list items for website */}
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <NavbarLogo />
                                <NavbarDrawer />
                            </div>

                            <NavbarMobileMenuButton isOpen={mobileMenuIsOpen} />

                        </div>
                    </div>
                    <NavbarMobileDropdown />
                    </>

                )}
            </Disclosure>
        </header>
    );
}

export default Navbar;