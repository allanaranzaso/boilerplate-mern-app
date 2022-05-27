import {Link} from "react-router-dom";

const FooterCopyright = () => {
    const style = 'text-sm text-gray-500 sm:text-center dark:text-gray-400';
    const linkStyle = 'hover:underline';

    return(
        <>
            <span className={style}>
                &copy; 2022 <Link to='/' className={linkStyle}> Company</Link>
                . All Rights Reserved.
            </span>
        </>
    );
}

export default FooterCopyright;