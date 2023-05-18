'use client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { SyntheticExpression } from 'typescript';

export default function Home() {
  const [logOrSign, setLogOrSign] = useState<boolean>(true);
  const [login, setLogin] = useState();
  const [sigup, setSignup] = useState<SignupValues>({
    email: '',
    password: '',
  });

  const handleOnChangeSignup = (e:React.FormEvent<HTMLInputElement>) => {
    console.log(e.target.name);

    if (e.target.name === 'email') {
      console.log('email')
      //setSignup({})
    } else if (e.target.name === 'psw') {
      console.log('psw')
    } else if (e.target.name === 'pswCheck') {
      console.log('pswCheck')
    }
  }

  const handleSubmitSignup= (event: SubmitEvent) => {
    event.preventDefault()
    console.log('handleSubmitSignup')
  }

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


              {logOrSign ? 
              //login
              (<div className='block-wrap'>
                <div className='login-signup-selector'>
                  <div className='login'>Login</div>
                  <div className='signup' onClick={() => setLogOrSign(false)}>Signup</div>
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
              </div>) : 

              //signup
              (<form className='block-wrap signup' onSubmit={handleSubmitSignup}>
                <div className='login-signup-selector'>
                  <div className='login' onClick={() => setLogOrSign(true)}>Login</div>
                  <div className='signup'>Signup</div>
                </div>

                <div className='login-form'>

                  <label htmlFor="email"><b>Email</b></label>
                  <input 
                    type="email" 
                    placeholder="Enter Email" 
                    name="email" 
                    required 
                    value={sigup.email} 
                    onChange={(e:React.FormEvent<HTMLInputElement>) => handleOnChangeSignup(e)} 
                  />

                  <label htmlFor="psw"><b>Password</b></label>
                  <input 
                    type="password" 
                    placeholder="Enter Password" 
                    name="psw" 
                    required 
                    value={sigup.password} 
                    onChange={(e:React.FormEvent<HTMLInputElement>) => handleOnChangeSignup(e)}
                  />

                  <label htmlFor="psw"><b>Password confirmation</b></label>
                  <input 
                    type="password" 
                    placeholder="Enter Password Confirmation" 
                    name="pswCheck" 
                    required 
                    onChange={(e:React.FormEvent<HTMLInputElement>) => handleOnChangeSignup(e)} 
                  />

                </div>

                <div className='login-options'>
                  <div className='remember-me'>
                    <label>
                      <input 
                        type='checkbox'
                        name='robot'
                        required 
                        />
                        I am not a robot
                      </label>
                  </div>
                </div>

                <div className='login-button-wrap'>
                  <button type='submit'>Signup</button>
                </div>
              </form>)}

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
