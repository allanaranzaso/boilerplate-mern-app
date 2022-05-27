
// when you have chosen which social media links to show, import the icon as a component from a known icon library
// like react-icons
const socialMediaLinks = [
    { type: 'facebook', label: 'facebook', link: '/', title: 'Facebook', icon: null },
    { type: 'linkedin', label: 'linkedin', link: '/', title: 'Connect with me', icon: null },
    { type: 'github', label: 'github', link: '/', title: 'Browse my repos', icon: null },
    { type: 'instagram', label: 'email', link: '/', title: 'Email me', icon: null },
    { type: 'twitter', label: 'twitter', link: '/', title: 'Twitter', icon: null }
];

const SocialMedia = () => {
    const linkStyle = 'text-gray-500 hover:text-gray-900 dark:hover:text-white';
    return (
        <>
            {socialMediaLinks.map((socialMedia, key) => (
                <button key={key} aria-label={socialMedia.label}>
                    <a href={socialMedia.link}
                       className={linkStyle}
                       target="_blank"
                       rel="noreferrer noopener"
                       title={socialMedia.title}>

                        {socialMedia.icon}

                    </a>
                </button>
                ))
            }
        </>
    )
}

export default SocialMedia;