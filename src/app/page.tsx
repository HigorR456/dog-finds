import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className='login-section'>
          <div className='container'>

            <h2>Login as applicant</h2>

            <div className='content'>
              <div className='bg-wrap'>
                <img src='/dog-login-signin-bg-sq.jpg'/>
                <span>Can't find a job? &#128270;</span>
                <span>Don't worry, Dog Finds! &#128518; </span>
              </div>

              <div className='block-wrap'>
                <div className='login-signup-selector'>
                  <div className='login'>Login</div>
                  <div className='signup'>Signup</div>
                </div>

                <div className='login-form'>

                  <label htmlFor="email"><b>Email</b></label>
                  <input type="text" placeholder="Enter Email" name="email" required />

                  <label htmlFor="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required />

                </div>

                <div className='login-options'>
                  <div className='remember-me'>
                    <label><input type='checkbox'/>Remember me</label>
                  </div>

                  <div className='forgot-password'>Forgot password?</div>
                </div>

                <div className='login-button-wrap'>
                  <button>Login</button>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
