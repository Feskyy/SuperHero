import React from 'react'
import Profile from "../../assets/logo.jpg"
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
        <img src={Profile} className="home__img" />

        <div className="home_content">
            <div className="home__data">
                <h1 className="home__title"><span>I'm Olivier D. <br/> </span> Web Designer
                </h1>


                <p className="home__description">
                    I'm a Tunisian based web designer & front'end developer focused on 
                    crafting clean & user-friendly experiences, I am passionate about 
                    building excellent software that improves the lives of those around 
                    me.
                </p>

                <Link to='about' className='button'>
                More about me <span className='button__icon'>
                    <FaArrowRight />
                </span>
                </Link>
            </div>
        </div>

        <div className="color__block"></div>
    </section>
  )
}

export default Home
