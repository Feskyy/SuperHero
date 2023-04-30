import React from 'react';
import "./about.css"
import Info from "./Info"
import AboutImg from "../../assets/logo.jpg"

const About = () => {
    return (
        <section className='about section' id='about'>
            <h2 className='section__title'>About me</h2>
            <span className='section__subtitle'>My introduction</span>

            <div className='about__container container grid'>
                <img src={AboutImg} alt='' className='about__img' />

                <div className='about__data'>
                    <Info />

                    <p className='about__description'>Front'end Developer. I create web with UI. Creator of website, discord bots, applications using c++ knowledge: Python, C++, HTML, CSS, JS </p>
                </div>
            </div>
        </section>
    )
}

export default About