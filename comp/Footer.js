import React from 'react';
import Link from 'next/link';
import styles from './styles/footer.module.css';

const Footer = () => {
    return (
        <>
        <footer  aria-aria-label='footer' className={styles.Footer}>
             <div >© {new Date().getFullYear()} By Rentawhip Ltd</div>
             <strong>
             Designed and Created By Dosnine.
             </strong>
      </footer>

      </>
    )
}

export default Footer
