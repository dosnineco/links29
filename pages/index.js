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
          <h1  className={css.container_h1}>Do you need a business website today? </h1>

          <div className={css.pricing}>
            <div>
   
          {/* <ol>`
            <li>Simple Landing Page</li>
            <li>Detailed Link Analytics </li>
            <li>Local Seo</li>
            <li>Fully Branded Domains</li>
            <li>Montly Maintainace</li>
            <li>Contact form</li> 
          </ol> */}
          <Cardilight text={'Price: $115 USD'}/>
          </div>
          </div>
        </main>
      </>
    )   
}

