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

                  <div className='links-wrap'>
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
                  </div>

                  <div>
                    <label>Attach your resume</label>
                      <div className='attach-resume-wrap'>
                        <img src='/attach-resume.svg' alt='attach-resume'></img>
                        <label htmlFor="resume">Choose file
                          <input 
                            type="file" 
                            id="resume" 
                            name="resume"
                            value="" 
                          />
                        </label>
                      </div>
                  </div>
                  
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

                  <div>
                    <label htmlFor="experience">Experience level
                      <input type='hidden' />
                    </label>
                    
                    <div className='experience-options'>
                      <label htmlFor='junior'>
                        <input 
                          type="radio" 
                          id="junior" 
                          name="experience" 
                          value="" 
                        />
                        Junior
                      </label>

                      <label htmlFor='mid'>
                        <input 
                          type="radio" 
                          id="mid" 
                          name="experience" 
                          value="" 
                        />
                        Mid-level
                      </label>

                      <label htmlFor='senior'>
                        <input 
                          type="radio" 
                          id="senior" 
                          name="experience" 
                          value=""
                        />
                        Senior
                      </label>
                    </div>
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