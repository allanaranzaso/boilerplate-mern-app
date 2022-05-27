import { Link } from "react-router-dom";

// array of sitemap links to utilize in component
// random default names were used as placeholders
// customize by replacing the names and headers tailored to your needs
const footerNavigation = [
    { header: 'Resources', name: 'Github', href: '/' },
    { header: 'Resources', name: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
    { header: 'Follow Us', name: 'LinkedIn', href: 'https://linkedin.com/' },
    { header: 'Follow Us', name: 'Discord', href: '/'},
    { header: 'Legal', name: 'Privacy Policy', href: '/' },
    { header: 'Legal', name: 'Terms & Conditions', href: '/' }
];

const sectionStyle = 'grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3';
const h2Style = 'mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white';
const ulStyle = 'text-gray-600 dark:text-gray-400';
const linkStyle = 'mb-4';

const FooterSiteMapList = () => {
    return(
        <>
            <ResourcesSiteMap />
            <FollowUsSiteMap />
            <LegalSiteMap />
        </>
    );
}

const ResourcesSiteMap = () => {
    const resourcesLinks = footerNavigation.filter(link => link.header === 'Resources');
    return(
        <>
            <section className={sectionStyle}>
                <div>
                    <h2 className={h2Style}>
                        {footerNavigation[0].header}
                    </h2>
                    {
                        resourcesLinks.map((item, key) => (
                            <ul className={ulStyle}
                                key={key}>
                                <Link to={item.href}
                                      className={linkStyle}>{item.name}</Link>
                            </ul>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

const FollowUsSiteMap = () => {
    const followUsLinks = footerNavigation.filter(link => link.header === 'Follow Us');
    return(
        <>
            <section className={sectionStyle}>
                <div>
                    <h2 className={h2Style}>
                        {footerNavigation[2].header}
                    </h2>
                    {
                        followUsLinks.map((item, key) => (
                            <ul className={ulStyle}
                                key={key}>
                                <Link to={item.href} className={linkStyle}>{item.name}</Link>
                            </ul>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

const LegalSiteMap = () => {
    const legalLinks = footerNavigation.filter(link => link.header === 'Legal');
    return(
        <>
            <section className={sectionStyle}>
                <div>
                    <h2 className={h2Style}>
                        {footerNavigation[4].header}
                    </h2>
                    {
                        legalLinks.map((item, key) => (
                            <ul className={ulStyle}
                                key={key}>
                                <Link to={item.href} className={linkStyle}>{item.name}</Link>
                            </ul>
                        ))
                    }
                </div>
            </section>
        </>
    );
}
export default FooterSiteMapList;