import React from 'react';
import css from './styles/layout.module.css';
import Footer from '../comp/Footer';
import Link from 'next/link';
import Header from '@/comp/Header'

const Layout = ({children}) => {
    return (
        <div className={css.main_layout}>
            <Header/>
           <div className={css.layout}>
            {children}
           </div>
           <Footer/>
       </div>
    )
}

export default Layout;
