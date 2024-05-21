import React from 'react';
import Link from 'next/link';
import css from './styles/footer.module.css';

const Footer = () => {
    return (
        <>
        <footer  aria-aria-label='footer' className={css.footer}>
<h2 className={css.h2}>Service website Experts</h2>
            <ul className={css.pages} >
                <li><Link href='/' passHref><a className={css.regular}>	About</a></Link></li>
                <li><Link href='/privacy-policy' passHref><a className={css.regular}>	Privacy Policy</a></Link></li>

			</ul>
             <div ><span> © {new Date().getFullYear()}   Powered By Dosnine™ 
            </span> </div>
            
      </footer>

      </>
    )
}

export default Footer
