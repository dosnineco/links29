import Image from 'next/image';
import css from '../styles/index.module.css';
import React from 'react';
import Link from 'next/link';
import Meta from 'seo/meta';



const Cta_section = () => {
  return (
    <section className={css.sections_container}>
      <div className={css.cta_container}>
        <h1>Find the most effective cars  to rent.</h1>
        <p>Find a cheap, reliable car to rent for all your needs.</p>
        <Link href='/' passHref><a className={css.blue}>	Contact</a></Link>
      </div>
    </section>
  )
}

const Services_section = () => {
  return (
    <section className={css.sections_container}>
      <div className={css.services_container}>
        <h2>Our most popular choices</h2>
        <p>RentAwhip.com offers  the lowest car rental prices in Jamaica.</p>
        <ol className={css.services_container_ol}>
          <li>
            <Image src="/SUZUKI-SWIFT.jpg" layout='intrinsic' width={660} height={415} placeholder='blur' blurDataURL priority/>
            <h3>Fiat Panda Pop 1.2</h3>
            <span>Transmission: 5-Speed Manual</span>
            <span>Fuel Type: Petrol</span>
          </li>
          <li>
            <Image src="/SUZUKI-SWIFT.jpg" layout='intrinsic' width={660} height={415} placeholder='blur' blurDataURL priority/>
            <h3>Fiat Panda Pop 1.2</h3>
            <span>Transmission: 5-Speed Manual</span>
            <span>Fuel Type: Petrol</span>
          </li>
          <li>
            <Image src="/SUZUKI-SWIFT.jpg" layout='intrinsic' width={660} height={415} placeholder='blur' blurDataURL priority/>
            <h3>Fiat Panda Pop 1.2</h3>
            <span>Transmission: 5-Speed Manual</span>
            <span>Fuel Type: Petrol</span>
          </li>
          <li>
            <Image src="/SUZUKI-SWIFT.jpg" layout='intrinsic' width={660} height={415} placeholder='blur' blurDataURL priority/>
            <h3>Fiat Panda Pop 1.2</h3>
            <span>Transmission: 5-Speed Manual</span>
            <span>Fuel Type: Petrol</span>
          </li>
          <li>
            <Image src="/SUZUKI-SWIFT.jpg" layout='intrinsic' width={660} height={415} placeholder='blur' blurDataURL priority/>
            <h3>Fiat Panda Pop 1.2</h3>
            <span>Transmission: 5-Speed Manual</span>
            <span>Fuel Type: Petrol</span>
          </li>
          <li>
            <Image src="/SUZUKI-SWIFT.jpg" layout='intrinsic' width={660} height={415} placeholder='blur' blurDataURL priority/>
            <h3>Fiat Panda Pop 1.2</h3>
            <span>Transmission: 5-Speed Manual</span>
            <span>Fuel Type: Petrol</span>
          </li>
        </ol>
      </div>
    </section>
  )
}

const Contact_section = () => {
  return (
    <section className={css.sections_container}>
    
    </section>
  )
}
const Testimonials_section = () => {
  return (
    <section className={css.sections_container}>
    <ol>
        <li>
          <div>
          <Image src="/1660881763172357_c5_100x100.jpeg" layout='intrinsic' width={100} height={100} placeholder='blur' blurDataURL priority/>
          </div>
          <p>" RentAwhip.com saved me a lot of time when it came to finding a great vehicle when i visit Jamaica.</p>
        </li>
      </ol>
    </section>
  )
}



export default function Home() {

  return(
      <>
        <Meta 
          title="Rentawhip"
          des =""
          url=''
          img=''
          pub='2022-06-11T22:09:00Z'
          mod='2022-07-2T09:09:00Z'
        /> 
          <div className={css.home_container}>
          <Cta_section/>
          <Services_section/>
          {/* <Contact_section/> */}
          <Testimonials_section/>
        </div>
        
      </>
    )   
}

