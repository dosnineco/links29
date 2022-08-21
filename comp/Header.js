import React from 'react';
import css from './styles/header.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Header =()=>{
	return(
		<div className={css.header} aria-label="nav bar">
			<div className={css.container}>
				<Link href='/' passHref>
				<a>	Rentawhip</a>
				
				</Link>
				<ul className={css.unorder_menu}>
					<li><Link href='/' passHref><a className={css.regular}>	Home</a></Link></li>
					<li><Link href='/' passHref><a className={css.regular}>	About</a></Link></li>
					<li><Link href='/' passHref><a className={css.blue}>	Contact</a></Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Header