import Head from 'next/head';
import styles from '../styles/index.module.css';
import Image  from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dosnine Media</title>
        <meta name="description" content="Website creation service for service businesses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
     
        <Image src="/logo.png" layout='intrinsic' width={40} height={33} placeholder='blur' blurDataURL priority/>
        <p className={styles.logo}>Dosnine Media</p>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.tagline}>One Day Service Delivery</span>
            <h1 className={styles.title}>Do You Need A Website For Your Service Business?</h1>
            <div className={styles.buttons}>
              <a href='https://wa.me/message/5LXYP7EBAUHMD1' className={styles.button}>Yes</a>
              <a href='https://wa.me/message/5LXYP7EBAUHMD1' className={styles.button}>No</a>
            </div>
          </div>
          {/* <img src="/construction-site.jpg" alt="Construction site" /> */}
          <div className={styles.heroImage_con} >
          <Image className={styles.heroImage}  src="/cta_bg.jpg" layout='intrinsic' width={1920} height={1280} placeholder='blur' blurDataURL priority/>
          </div>
        </section>

        <section className={styles.whyChooseUs}>
          <h2>Why Choose Us</h2>
          <p>
            Our website creation service will elevate your construction business and overcome common challenges.
            Without a website, you miss out on credibility, visibility, and client opportunities. Our service showcases your business,
            attracts local clients, and keeps you competitive in the digital age.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <Image  src="/template.png" layout='intrinsic' width={114} height={114} placeholder='blur' blurDataURL priority/>
              <h3>Templates</h3>
            </div>
            <div className={styles.feature}>
              <Image  src="/technical-support.png" layout='intrinsic' width={114} height={114} placeholder='blur' blurDataURL priority/>
              <h3>Yearly Maintenance</h3>
            </div>
          </div>
        </section>


        <section className={styles.howItWorks}>
          <h2 className={styles.worksTitle}>How to get a website in a day?</h2>
          <p className={styles.worksSubtitle}>WORKING PROCESS</p>
          <div className={styles.worksContent}>
            
            {/* <img className={styles.worksImage} src="/ai-writer.png" alt="AI Writer Process" /> */}
            <div className={styles.worksSteps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <div className={styles.stepText}>
                  <h3>You have to be a service business that does not sell products online.</h3>
                  <p>Online stores are time consuming to implement, which would make our websites more expensive to develop.</p>
                  {/* <a href="#" className={styles.getStarted}>Get Started →</a> */}
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <div className={styles.stepText}>
                  <h3>Select a template your that works with your brand from our list of Templates</h3>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <div className={styles.stepText}>
                  <h3>Book a appointment </h3>
                  <p>Once step 1 to 2 is ok, on call we will collect info on your business to tailor the template to your business and Publish to your domain. </p>

                  <a href='https://wa.me/message/5LXYP7EBAUHMD1'  className={styles.howItWorksButton}>Book here</a>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>4</span>
                <div className={styles.stepText}>
                  <h3>Your Website Is now live! </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        {/* <p>© 2024 Rentawhip, Ltd</p> */}
        <p>Powered By Dosnine™</p>
      </footer>
    </div>
  );
}
