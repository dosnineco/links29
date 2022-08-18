import Image from 'next/image';
import css from '../styles/index.module.css';
import React from 'react';
import Link from 'next/link';
import posts from '../publish_posts';
import Meta from 'seo/meta';

export default function Home() {

  return(
      <>
        <Meta 
          title="What's Needed by Tahjay Thompson"
          des ="What's Needed by Tahjay Thompson is a site that list all the required tools needed to get a task complete, the aim is to create the world's #1 database for what's needed items on a variety of topics."
          url='https://www.tahjaythompson.com/'
          img='https://www.tahjaythompson.com/logo.png'
          pub='2022-06-11T22:09:00Z'
          mod='2022-07-2T09:09:00Z'
        /> 
         <em className={css.small_caution}> TahjayThompson.com is supported by its audience. When you purchase through links on our site, we may earn an affiliate commission.</em>
          <div className={css.post_wrapper}>
        {posts.map((x,i)=>{
          return(
              <Link href={x.url}>
                <div className={css.body}>
                    <Image src={x.thumbnail} layout='fixed' width={320} height={190} placeholder='blur' blurDataURL priority/>
                  <a className={css.title}>
                   <strong> {x.title}</strong>
                  </a>
                </div>
              </Link>
        )})}
            </div>
      </>
    )   
}
