import React from 'react';
import css from './styles/layout.module.css';

const Layout = ({children}) => {
    return (
        <div className={css.main_layout}>
            {children}
       </div>
    )
}

export default Layout;
