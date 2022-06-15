import { Link } from "react-router-dom";

const FooterSiteName = () => {
    return(
        <div className="mb-6 sm:mr-8 md:mb-0">
            <Link to="/" className="flex items-center">
                {/* uncomment the code below if you want to add a logo to the footer*/}
                {/* <img src="/docs/images/logo.svg" className="mr-3 h-8" alt="FlowBite Logo" /> */}
                <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Footer</p>
            </Link>
        </div>
    );
}

export default FooterSiteName;