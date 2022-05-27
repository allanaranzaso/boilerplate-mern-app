import FooterSiteMap from "./FooterSiteMap";
import FooterSiteName from "./FooterSiteName";
import {Link} from "react-router-dom";
import SocialMedia from "../socialmedia/SocialMedia";

const Footer = () => {
    return(
    <>
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
        {/* sitemap section */}
        <div className="md:flex md:justify-between">
            <FooterSiteName />
            <FooterSiteMap />
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                &copy; 2022 <Link to="/" className="hover:underline">Company™</Link>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <SocialMedia />
            </div>
        </div>
        </footer>
    </>
    );

};

export default Footer;