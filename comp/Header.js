import React from 'react';
import css from './styles/header.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Header =()=>{
	return(
		<div className={css.header} aria-label="nav bar">
			<Link href='/' passHref>
                <a className={css.logo}>   
                tahjay thompson             
                </a>
            </Link>
		</div>
	)
}

export default Header