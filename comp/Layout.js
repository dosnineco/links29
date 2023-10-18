import React, { useState } from 'react';
import css from './styles/layout.module.css';
import axios from 'axios';


const Mail=() => {
    const [status, setStatus] = useState({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
    const [inputs, setInputs] = useState({
      email: '',
      message: '',
    });
    const handleServerResponse = (ok, msg) => {
      if (ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: msg },
        });
        setInputs({
          email: '',
          message: '',
        });
      } else {
        setStatus({
          info: { error: true, msg: msg },
        });
      }
    };
    const handleOnChange = (e) => {
      e.persist();
      setInputs((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
      }));
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
      });
    };
    const handleOnSubmit = (e) => {
      e.preventDefault();
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      axios({
        method: 'POST',
        url: 'https://formspree.io/f/moqbvjql',
        data: inputs,
      })
        .then((response) => {
          handleServerResponse(
            true,
            'Thank you, your message has been submitted.',
          );
        })
        .catch((error) => {
          handleServerResponse(false, error.response.data.error);
        });
    };
    return (
      <main className={css.main}>
  
        <form  className={css.form} onSubmit={handleOnSubmit}>
          <h2>I Build Websites! </h2>
          <input
            className={css.form_btn} 
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            placeholder='example@mail.com   '
            value={inputs.email}
          />
          {/* <textarea
            className={css.form_text_input} 
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
          /> */}
          <button className={css.footer_button} type="submit" disabled={status.submitting}>
            {!status.submitting
              ? !status.submitted
                ? 'Submit'
                : 'Submitted'
              : 'Submitting...'}
          </button>
  
  
          {/* <span  className={css.phone}>
          <a href="tel:876-208-5353">876 208-5353</a>
          </span> */}
  
  
        </form>
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      </main>
    );
  };

  
const Header = ()=>{
    return (
        <header className={css.header}>
            {/* <button >Register</button> */}

<a href="https://calendly.com/dosnineco/register-for-a-quota-meeting" className={css.header_button}>Book us Right here</a>
        </header>
    )
}

const Footer = ()=>{
    return (
        <footer className={css.footer}>
            <Mail/>
        </footer>
    )
}
const Layout = ({children}) => {
    return (
        <main className={css.main_layout}>
            <Header/>
            {children}
            <Footer/>
       </main>
    )
}

export default Layout;
