import FooterSiteMapList from "./FooterSiteMapList";

const FooterSiteMap = () => {
    const footerStyle = 'grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'

    return(
        <>
        <section className={footerStyle}>
            <FooterSiteMapList />
        </section>
        </>
    );
}

export default FooterSiteMap;