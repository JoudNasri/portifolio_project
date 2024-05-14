import React from 'react'
import './Service.css'

const Service = () => {
    return (
        <section className="service section" id="services">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-mobile-alt"></i>
                            </div>
                            <h4>Responsive Design</h4>
                            <p>your website will be 100% responsive for all devices, tabets and phones.</p>
                        </div>
                    </div>
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-laptop-code"></i>
                            </div>
                            <h4>Web Development</h4>
                            <p>I can build a website by using html, css, and JavaScript in a subtly way.</p>
                        </div>
                    </div>
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-palette"></i>
                            </div>
                            <h4>Creative design</h4>
                            <p>I can edit your current website by adding a new content .</p>
                        </div>
                    </div>
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-code"></i>
                            </div>
                            <h4>Web ideas</h4>
                            <p>I could turn your ideas into a real projects with heigh quality.</p>
                        </div>
                    </div>
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-search"></i>
                            </div>
                            <h4>Reatouch</h4>
                            <p>I can help you by redesign your current websites to looks much better.</p>
                        </div>
                    </div>
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-bullhorn"></i>
                            </div>
                            <h4>Support</h4>
                            <p>Support is available if you wanna make any changes for you website.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service