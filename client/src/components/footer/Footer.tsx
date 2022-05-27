import FooterSiteMap from "./FooterSiteMap";
import FooterSiteName from "./FooterSiteName";
import SocialMedia from "../socialmedia/SocialMedia";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
    return(
    <>
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">

            {/* sitemap section */}
            <div className="md:flex md:justify-between">
                <FooterSiteName />
                <FooterSiteMap />
            </div>

            {/* copyright and social media section */}
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <FooterCopyright />
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <SocialMedia />
                </div>
            </div>

        </footer>
    </>
    );

};

export default Footer;