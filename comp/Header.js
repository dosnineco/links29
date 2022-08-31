import React, { useState } from "react";
import css from './styles/header.module.css'
import Link from 'next/link';
import Image from 'next/image';

const NavItem = ({ text, href, active }) => {
	return (
	  <Link href={href}>
		<a className={`nav__link`}>{text}</a>
	  </Link>
	);
  };
  

  const Navbar = () => {
	const [navActive, setNavActive] = useState(null);
	const [activeIdx, setActiveIdx] = useState(-1);
  
	return (
	  <header >
		<nav className={`nav`}>
			<Link href='/' passHref>
				<a alt="Rentawhip">
				Rentawhip
				{/* <Image src="/logo.jpg" layout='intrinsic' width={660} height={415} placeholder='blur' blurDataURL priority/> */}
				</a>
			</Link>
		  <div
			onClick={() => setNavActive(!navActive)}
			className={`nav__menu-bar`}
		  >
			<div></div>
			<div></div>
			<div></div>
		  </div>
		  <div onScrollCapture={() => setNavActive(!navActive)} className={`${navActive ? "active" : ""} nav__menu-list`}>
			<ul onClick={() => setNavActive(!navActive)}   className={css.unorder_menu}>
				<li><Link href='/' passHref><a className={css.regular}>	Home</a></Link></li>
				<li><Link href='/' passHref><a className={css.regular}>	About</a></Link></li>
				<li><Link href='/contactus' passHref><a className={css.blue}>	Contact</a></Link></li>
			</ul>
		  </div>
		</nav>
	  </header>
	);
  };


const Header =()=>{
	return(
		<>
		<Navbar/>
		</>
	)
}

export default Header