import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Shaker </strong>, a motivated <br />
        Software Engineer
        <br />
        trying build a better future by <br />
        solving real-world problems.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
