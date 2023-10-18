import Image from 'next/image';
import css from '../styles/index.module.css';
import React from 'react';
import Meta from 'seo/meta';


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
          <p>Use our template to create a blazingly fast website for high conversions.</p>
        </main>
      </>
    )   
}

