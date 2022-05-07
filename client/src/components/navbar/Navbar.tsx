
const Navbar = () => {
    return(
        <>
        <header className="m-0 p-0 top-0 z-50 ">
            <nav className={`fixed w-full transition-all z-50 clear-both mx-auto lg:px-8 h-12 `}>
                    <div className="relative">
                        <div className="absolute inset-y-0 flex flex-wrap md:flex-nowrap w-full h-12">
                            
                            {/* Menu bar that will be hidden or be shown to the user
                                    dependent on the state of toggle */}
                            <div className={"md:hidden w-full m-auto flex justify-end h-12"}>
                                {/* <NavDrawer /> */}
                            </div>
                            
                            <div className={"text-center text-lg font-extralight lg:w-11/12 w-full"}>
                                {/* <NavListItems /> */}
                                <ul>
                                    <li>Test</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </nav>
        </header>
        </>
    );
}

export default Navbar;