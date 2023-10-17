import Image from 'next/image';
import css from './index.module.css';
import React from 'react';
import Link from 'next/link';
import Meta from 'seo/meta';
import ContactUs from 'comp/ContactUs';



const Cta_section = () => {
  return (
    <section className={css.sections_container}>
      <div className={css.cta_container}>
        <h1>Find the most effective cars  to rent.</h1>
        <p>Drive in luxury with us today.</p>
        <Link href='/contactus' passHref><a className={css.blue}>	Contact</a></Link>
      </div>
    </section>
  )
}

const Services_section = () => {
  return (
    <section className={css.sections_container}>

 

      <div className={css.services_container}>
          <h3 className={css.card_card_h3}>Select Your Ride</h3>
        <ol className={css.services_container_ol}>
          <li className={css.card_card}>
          <Link href='/7seater_subaru' passHref>
            <a className={css.card_card_parent}>
                <Image src="/img/img_1.jpeg" layout='intrinsic' objectFit="cover" width={660} height={415} placeholder='blur' blurDataURL priority/>
                <div className={css.card_card_text}>
                  <span className={css.card_card_title}>
                    <span className={css.card_card_title_child}>subaru exiga 7 Seater</span>
                  </span>
                  <span className={css.card_card_price}><strong>$8000Jmd/</strong>Day</span>
                  <button className={css.card_card_cta}>Rent Now</button>
                </div>
            </a>
          </Link>
          </li>

          <li className={css.card_card}>
          <Link href='/5seater_subaru' passHref>
            <a className={css.card_card_parent}>
                <Image src="/img/img_5.jpeg" layout='intrinsic' objectFit="cover" width={660} height={415} placeholder='blur' blurDataURL priority/>
                <div className={css.card_card_text}>
                  <span className={css.card_card_title}>
                    <span className={css.card_card_title_child}>Subaru impreza g4 5 Seater</span>
                  </span>
                  <span className={css.card_card_price}><strong>$7000Jmd/</strong>Day</span>
                  <button className={css.card_card_cta}>Rent Now</button>
                </div>
            </a>
          </Link>
          </li>
          <li className={css.card_card}>
          <Link href='/5seater_subaru_black' passHref>
            <a className={css.card_card_parent}>
                <Image src="/img/img_10.jpeg" layout='intrinsic' objectFit="cover" width={660} height={415} placeholder='blur' blurDataURL priority/>
                <div className={css.card_card_text}>
                  <span className={css.card_card_title}>
                    <span className={css.card_card_title_child}>Subaru impreza g4 5 Seater</span>
                  </span>
                  <span className={css.card_card_price}><strong>$7000Jmd/</strong>Day</span>
                  <button className={css.card_card_cta}>Rent Now</button>
                </div>
            </a>
          </Link>
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




export default function Jojo() {

  return(
      <>
        <Meta 
          title="Jo Jo Trucking Home"
          des ="RentAwhip.com offers the lowest car rental prices in Jamaica."
          url='www.rentawhipja.com'
          img=''
          pub='2022-08-30T22:09:00Z'
          mod='2022-08-30T09:09:00Z'
        /> 
          <div className={css.home_container}>
          <Cta_section/>
     
          <Services_section/>
          <div className={css.list_of_s}>
            <ul className={css.services_listing}>
              <li className={css.services_listing_1}>Spacious car rentals</li>
              <li className={css.services_listing_2}>Many makes and models</li>
              <li className={css.services_listing_3}>Competitive prices</li>
              <li className={css.services_listing_4}>Low deposit required </li>
              <li className={css.services_listing_5}>Car delivered to you</li>
            </ul>
          </div>
          <Contact_section/>
        </div>
        
      </>
    )   
}

