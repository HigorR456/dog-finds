import { FaDog, FaRegCopyright } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className='footer-wrap'>
                <div className='row-wrap'>
                    <div className='first-row'>
                        <div className='logo-wrap'>
                            <FaDog className='logo' />
                        </div>
                        <div className='links'>
                            <Link href='/' className='footer-link'>Jobs</Link>
                            <Link href='/' className='footer-link'>Login</Link>
                            <Link href='/' className='footer-link'>Signup</Link>
                        </div>
                    </div>
                    
                    <div className='second-row'>
                        <div className='legal-text'>
                            <FaRegCopyright className='copyright' />
                            2023. All rights Reserved. Developed by Higor.
                        </div>

                        <div className='legal-links'>
                            <a>License</a>
                            <a>Terms</a>
                            <a>Privacy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;