import React from 'react';
import Link from 'next/link';
import styles from './styles/footer.module.css';

const Footer = () => {
    return (
        <>
        <footer  aria-aria-label='footer' className={styles.Footer}>
            <Link href='/about' passHref>
                <a>About</a>
            </Link>
            <Link href='/terms-conditions' passHref>
                <a>terms-conditions</a>
            </Link>
             <div >© {new Date().getFullYear()} by Tahjay Thompson, inc </div>
      </footer>

      </>
    )
}

export default Footer
