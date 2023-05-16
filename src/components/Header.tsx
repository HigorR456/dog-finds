'use client';
import { useState } from 'react';
import { FaDog } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);

    return (
        <>
            <header className={menu ? 'show' : ''}>
                <div className='logo'>
                    Dog Finds
                    <FaDog className='icon' />
                </div>

                <div className='menu-wrap' onClick={() => menu ? setMenu(false) : setMenu(true)}>
                <AiOutlineMenu className='menu-icon'/>
                <AiOutlineClose className='close-icon' />
                </div>

                <nav>
                    <ul>
                        <li><a href='/' onClick={() => setMenu(false)}>Jobs</a></li>
                        <li><a href='/' onClick={() => setMenu(false)}>Login</a></li>
                        <li><a href='/' onClick={() => setMenu(false)}>Signup</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;