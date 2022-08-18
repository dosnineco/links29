import Image from 'next/image';
import css from '../styles/index.module.css';
import React from 'react';
import Link from 'next/link';
import Meta from 'seo/meta';



const Cta_section = () => {
  return (
    <section className={css.sections_container}>
      <div className={css.cta_container}>
       
        <div className={css.text_container}>
          <h1  className={css.h1}>
          Ready To Grow? Get Your Free Proposal Today:
          </h1>
          <p className={css.p}>
          Take the next step in growing your business using digital marketing. Connect with one of our expert digital strategists to learn how Dosnine can help you reach your business goals.
          </p>
        </div>
    
      </div>
    </section>
  )
}

const Services_section = () => {
  return (
    <section className={css.sections_container}>
      <div className={css.services_container}>
        <ol className={css.services_container_ol}>
          <li>Custom SEO</li>
          <li>Google Analytics Integration</li>
          <li>Custom Fonts</li>
          <li>Unique branding</li>
          <li>User Accessability</li>
          <li>Copywriting</li>
          <li>Startup landing pages</li>
          <li>Responsive designs</li>
          <li>Instant page load time</li>
          <li>Newsletter Integration</li>
        </ol>
      </div>
    </section>
  )
}

const Contact_section = () => {
  return (
    <section className={css.sections_container}>
      Contact
    </section>
  )
}
const Testimonials_section = () => {
  return (
    <section className={css.sections_container}>
      Testimonials
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
          <Contact_section/>
          <Testimonials_section/>
        </div>
        
      </>
    )   
}

