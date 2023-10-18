import Image from 'next/image';
import css from '../styles/index.module.css';
import React from 'react';
import Meta from 'seo/meta';
import Cardilight from 'comp/Cardilight';

export default function Home() {

  return(
      <>
        <Meta 
          title=""
          des =""
          url=''
          img=''
          pub='2022-08-30T22:09:00Z'
          mod='2022-08-30T09:09:00Z'
        /> 
        <main className={css.container}>
          <h1  className={css.container_h1}>Digitize your business.</h1>
          {/* <p>Use our template to create a blazingly fast website for high conversions.</p> */}

          <div className={css.pricing}>
            <div>
          {/* <h2>
            Basic template plans include:
          </h2> */}
          <h2>Simple Landing Page</h2>
          <ol>
            {/* <li>Simple Landing Page</li> */}
            {/* <li>Detailed Link Analytics </li>
            <li>Local Seo</li>
            <li>Fully Branded Domains</li>
            <li>Montly Maintainace</li>
            <li>Bookings link</li>
            <li>Contact form</li> */}
          </ol>
          <Cardilight text={'Price: $100 USD'}/>
          </div>
          </div>
        </main>
      </>
    )   
}

