import React from 'react'
import './ContainerAbout.css'

const ContainerAbout = () => {
    return (
        <section>
            <div className='about'>
                <div className='section-title'>
                    <h2>About me</h2>
                </div>
                <div className='paragraph'>
                    <h3>I'm Joud Nasri a good <span className='web'> Web Developer</span></h3>
                    <p>I have designed many different types of projects whith high accuracy and certainly compatible and responsive on all laptop and mobile devices using the programming languages HTML , CSS , BOOTSTRAP , JAVASCRIPT , REACT JS , NEXT JS</p>
                </div>
                <div className='all-details'>
                    <div className='details1'>
                        <div className='birthday'>
                            <p className='one'>Birthday : <span className='tow'>21/9/2002</span></p>
                        </div>
                        <div className='birthday'>
                            <p className='one'>Degree : <span className='tow'>FrontEnd/Business</span></p>
                        </div>
                        <div className='birthday'>
                            <p className='one'>City : <span className='tow'>Syria / Dubai</span></p>
                        </div>
                    </div>
                    <div className='details2'>
                        <div className='birthday'>
                            <p className='one'>Age : <span className='tow'>21</span></p>
                        </div>
                        <div className='birthday'>
                            <p className='one'>Email : <span className='tow'>Joudnasri28@gmail.com</span></p>
                        </div>
                        <div className='birthday'>
                            <p className='one'>Phone : <span className='tow'>0938268240</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="education padd-15">
                    <h3 class="title">Education</h3>
                    <div class="row">
                        <div class="timeline-box padd-15">
                            <div class="timeline shadow-dark">
                                <div class="timeline-item">
                                    <div class="circle-dot"></div>
                                    <h3 class="timeline-date">
                                        <i class="fa fa-calendar"></i> 2020 - 2024
                                    </h3>
                                    <h4 class="timeline-title">Hold a business administration</h4>
                                    <p class="timeline-text">I studied business administration and hold
                                        certificates in business administration and human resources</p>
                                </div>
                                <div class="timeline-item">
                                    <div class="circle-dot"></div>
                                    <h3 class="timeline-date">
                                        <i class="fa fa-calendar"></i> 2021 - 2024
                                    </h3>
                                    <h4 class="timeline-title">Hold FrontEnd certificates</h4>
                                    <p class="timeline-text">I studied programming and hold many
                                        certificates, I designed many websites and businesses, in
                                        addition to extensive tasks by Focal X. The pages I designed
                                        were designed at the highest level using the programming
                                        languages HTML , CSS , BOOTSTRAP , JAVASCRIPT , REACT JS , NEXT
                                        JS and of course the sites are responsive </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="experience padd-15">
                    <h3 class="title">Experience</h3>
                    <div class="row">
                        <div class="timeline-box padd-15">
                            <div class="timeline shadow-dark">
                                <div class="timeline-item">
                                    <div class="circle-dot"></div>
                                    <h3 class="timeline-date">
                                        <i class="fa fa-calendar"></i> 2021 - 2024
                                    </h3>
                                    <h4 class="timeline-title">ICDL</h4>
                                    <p class="timeline-text">I have extensive experience in the computer
                                        field and experience in all abbreviations , as i can work on
                                        Excel, Word ,and visual code.</p>
                                </div>
                                <div class="timeline-item">
                                    <div class="circle-dot"></div>
                                    <h3 class="timeline-date">
                                        <i class="fa fa-calendar"></i> 2021 - 2024
                                    </h3>
                                    <h4 class="timeline-title">FrontEnd Projects</h4>
                                    <p class="timeline-text">Three years of experience with FocalX, in
                                        which I designed many high-quality websites with the highest
                                        accuracy, and gave projects every week to design on the Figma
                                        website. I also designed some external projects, such as a
                                        women’s clothing store (Mozhela Kids) and also a site for car
                                        showrooms . </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContainerAbout