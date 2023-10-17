import React from 'react';
import Link from 'next/link';
import css from './styles/footer.module.css';

const Footer = () => {
    return (
        <>
        <footer  aria-aria-label='footer' className={css.footer}>
            {/* <Link href='/contactus' passHref><a className={css.blue}>	Contact Us Now</a></Link> */}
            <ul className={css.pages} >
                <li><Link href='/' passHref><a className={css.regular}>	About</a></Link></li>
                <li><Link href='/privacy-policy' passHref><a className={css.regular}>	Privacy Policy</a></Link></li>

			</ul>
             <div >© {new Date().getFullYear()} Rentawhip, Ltd</div>
             <span>
                Powered By Dosnine™ 
            </span> 
      </footer>

      </>
    )
}

export default Footer
