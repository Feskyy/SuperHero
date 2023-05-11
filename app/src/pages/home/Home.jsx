import React from 'react'
import Profile from "../../assets/purple.png"
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
        <img src={Profile} className="home__img" />

        <div className="home_content">
            <div className="home__data">
                <h1 className="home__title"><span>I'mistrzU <br/> </span> Web Designer
                </h1>


                <p className="home__description">
                    Text
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
