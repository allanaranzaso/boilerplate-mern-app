import FooterCopyright from "./FooterCopyright";
import FooterSiteMap from "./FooterSiteMap";

const Footer = () => {
    return(
    <>
    <footer className='bg-gray-500 h-52 flex flex-col justify-around pl-2'
            data-testid="footer">
        <p>Footer</p>
        <FooterSiteMap />
        <FooterCopyright />
    </footer>
    </>
    );
    
};

export default Footer;