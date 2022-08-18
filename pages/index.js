import Image from 'next/image';
import css from '../styles/index.module.css';
import React from 'react';
import Link from 'next/link';
import Meta from 'seo/meta';



const Cta_section = () => {
  return (
    <section className={css.sections_container}>
      <div className={css.cta_container}>
        Cta
      </div>
    </section>
  )
}

const Services_section = () => {
  return (
    <section className={css.sections_container}>
      <div className={css.services_container}>
        <ol className={css.services_container_ol}>
          services
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

