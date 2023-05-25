'use client'
import '../../styles/globals.scss'
import '../../styles/edit.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const index = () => {
  return (
    <>
      <Header />

      <main>
        <section className='register-section'>
          <div className='container'>
            <h2>Edit Profile</h2>

            <form className='content'>
              <fieldset className='about-you'>

                <legend>ABOUT YOU</legend>

                <div className='photo-wrap'>
                  <label htmlFor='uphoto'>Upload Photo</label>
                  <input 
                    type='file' 
                    id='uphoto' 
                    name='uphoto' 
                    value='' 
                  />
                </div>
                
                <div className='input-wrap'>
                  <label htmlFor="fname">First name
                    <input 
                      type="text" 
                      id="fname" 
                      name="fname" 
                      placeholder='Type your first name'
                      value="" 
                    />
                  </label>


                  <label htmlFor="lname">Last name
                    <input 
                      type="text" 
                      id="lname" 
                      name="fname" 
                      placeholder='Type your last name'
                      value="" 
                    />
                  </label>

                  <label htmlFor="pnumber">Phone Number
                    <input 
                      type="text" 
                      id="pnumber" 
                      name="pnumber" 
                      placeholder='Ex: +55 (11) 9 9999-9999'
                      value="" 
                    />
                  </label>

                  <label htmlFor="location">Location
                    <input 
                      type="text" 
                      id="location" 
                      name="location" 
                      placeholder='Ex: Brazil'
                      value="" 
                    />
                  </label>
                </div>

              </fieldset>

              <fieldset className='introduction'>
                <legend>INTRODUCTION</legend>

                  <label htmlFor="title">Title
                    <input 
                      type="text" 
                      id="title" 
                      name="title" 
                      placeholder='Ex: Front-End Developer'
                      value="" 
                    />
                  </label>

                  <label htmlFor="fname">Description
                    <input 
                      type="text" 
                      id="description" 
                      name="description" 
                      placeholder='Tell us about your objectives, experience and career.'
                      value="" 
                    />
                  </label>

                  <label htmlFor="linkedinlink">Linkedin url
                    <input 
                      type="text" 
                      id="linkedinlink" 
                      name="linkedinlink" 
                      placeholder='Ex: https://www.linkedin.com/in/example'
                      value="" 
                    />
                  </label>

                  <label htmlFor="githublink">GitHub url
                    <input 
                      type="text" 
                      id="githublink" 
                      name="githublink" 
                      placeholder='Ex: https://www.github.com/example'
                      value="" 
                    />
                  </label>

                  <label htmlFor="resume">Attach your resume
                    <input 
                      type="file" 
                      id="resume" 
                      name="resume"
                      value="" 
                    />
                  </label>
              </fieldset>

              <fieldset className='abilities'>
                <legend>ABILITIES</legend>

                  <label htmlFor="title">Main scope
                    <select
                    id='scope'
                    name='scope'>
                      <option>Choose your main scope</option>
                      <option>Back-End</option>
                      <option>Front-End</option>
                      <option>Full Stack</option>
                      <option>Mobile</option>
                    </select>
                  </label>

                  <label htmlFor="experience">Experience level</label>
                  <input type='hidden' />
                  
                  <div className=' '>
                    <label htmlFor='junior'>
                      Junior
                      <input 
                        type="radio" 
                        id="junior" 
                        name="experience" 
                        value="" 
                      />
                    </label>

                    <label htmlFor='mid'>
                      Mid-level
                      <input 
                        type="radio" 
                        id="mid" 
                        name="experience" 
                        value="" 
                      />
                    </label>

                    <label htmlFor='senior'>
                      Senior
                      <input 
                        type="radio" 
                        id="senior" 
                        name="experience" 
                        value=""
                      />
                    </label>
                  </div>
                  
              </fieldset>

              <fieldset className='experience'>
                <legend>EXPERIENCE</legend>
                <div></div>
              </fieldset>

              <fieldset className='requirements'>
                <legend>PERSONAL REQUIREMENTS</legend>
                <div></div>
              </fieldset>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default index;