import React from 'react'
import './MainCon.css'
import img from "../../../public/img/314901746_5597324640348025_8785581232930925250_n.jpg"


const MainCon = () => {
    return (
        <section className="home active section" id="home">
            <div className="container">
                <div className="row">
                    <div className="home-info padd-15">
                        <h3 className="hello">hello, my name is <span className="name"> Joud Nasri</span></h3>
                        <h3 className="my-profession">I' m a <span className="typing">Web Developer</span></h3>
                        <p>I'm a web Developer with extensive experience for over 3 years. My experise is to
                            create and website design and many more...</p>
                        <div className="icons padd-15">
                            <a href="https://www.facebook.com/joud.nasri.7" target="_blank"><i
                                className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.linkedin.com/in/joud-nasri-21a780266/" target="_blank"><i
                                className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/JoudNasri" target="_blank"><i
                                className="fa-brands fa-github"></i></a>
                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                        </div>
                        <a href="#" className="btn">Download CV</a>
                    </div>
                    <div className="home-img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MainCon