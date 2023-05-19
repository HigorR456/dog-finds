'use client'
import '../styles/globals.scss'
import '../styles/page.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  //const [route, setRoute] = useState();

  const [logOrSign, setLogOrSign] = useState<boolean>(true);
  const [login, setLogin] = useState<LoginValues>({
    email: '',
    password: '',
  });
  const [signup, setSignup] = useState<SignupValues>({
    email: '',
    password: '',
    pswCheck: '',
  });

  
  //login
  const handleOnChangeLogin = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setLogin({...login, [key]: e.target.value})
  }
  const handleSubmitLogin= (event: SubmitEvent) => {
    event.preventDefault()
    router.push('/edit')
  }


  //sign up
  const handleOnChangeSignup = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setSignup({...signup, [key]: e.target.value})
  }
  const handleSubmitSignup= (event: SubmitEvent) => {
    event.preventDefault()
    if (signup.password === signup.pswCheck) {
      router.push('/edit')
    }
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
              (<form className='block-wrap' onSubmit={() => handleSubmitLogin}>
                <div className='login-signup-selector'>
                  <div className='login'>Login</div>
                  <div className='signup' onClick={() => setLogOrSign(false)}>Signup</div>
                </div>

                <div className='login-form'>

                  <label htmlFor="email"><b>Email</b></label>
                  <input 
                    type="text" 
                    placeholder="Enter Email" 
                    name="email" 
                    required 
                    value={login.email} 
                    onChange={(e) => handleOnChangeLogin(e, 'email')} 
                    />

                  <label htmlFor="psw"><b>Password</b></label>
                  <input 
                    type="password" 
                    placeholder="Enter Password" 
                    name="psw" 
                    required 
                    value={login.password} 
                    onChange={(e) => handleOnChangeLogin(e, 'password')} 
                    />

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
              </form>) : 

              //signup
              (<form className='block-wrap signup' onSubmit={() => handleSubmitSignup}>
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
                    value={signup.email} 
                    onChange={(e) => handleOnChangeSignup(e, 'email')} 
                  />

                  <label htmlFor="psw"><b>Password</b></label>
                  <input 
                    type="password" 
                    placeholder="Enter Password" 
                    name="psw" 
                    required 
                    value={signup.password} 
                    onChange={(e) => handleOnChangeSignup(e, 'password')}
                  />

                  <label htmlFor="psw"><b>Password confirmation</b></label>
                  <input 
                    type="password" 
                    placeholder="Enter Password Confirmation" 
                    name="pswCheck" 
                    required 
                    onChange={(e) => handleOnChangeSignup(e, 'pswCheck')} 
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