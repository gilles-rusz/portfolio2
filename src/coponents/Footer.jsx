
import React from 'react';
import '../style/Footer.css';






const Footer = () => {
  return (
    <div className="footer">
      <div className="john">
        <h4>John Deo</h4>
        <ul>
          <li>40 rue Laure Diebold 69009 Lyon, France</li>
          <li>10 20 30 40 50</li>
          <li>john.deo@gmail.com</li>
          <div className='reseaux'>
            <img className='icon' href='portfolio/public/images/twitter.png' alt='logo twiter'></img>
            <img className='icon' href='portfolio/public/images/social.png' alt='logo github'></img>
            <img className='icon' href='portfolio/public/images/linkedin.png'alt='logo linkedin'></img>
          </div>
        </ul>
      </div>
      <div className="liens">
        <h4>Liens utiles</h4>
        <ul className='footer2'>
          <li>
            <a href='/'>Home</a>
          </li>

          <li>
            <a href='/services'>Services</a>
          </li>

          <li>
            <a href='/Contact'>Contact</a>
          </li>

          <li>
            <a href='/Portfolio'>Portfolio</a>
          </li>

          <li>
            <a href='/Notice'>Mentions Légales</a>
          </li>
        </ul>
      </div>
      <div className="rea">
        <h4>Mes derniéres réalisations</h4>
        <ul>
          <li>
            <a href='/Portfolio'>Fresh Food</a>
            </li>
          <li> 
            <a href='/Portfolio'>Restaurant Akira</a>
          </li>
          <li> 
            <a href='/Portfolio'>Espace bien-être</a>
         </li>
          <li>
          <a href='/Portfolio'>SEO</a>
          </li>
          <li>
          <a href='/Portfolio'>Création d'une API</a>
          </li>
          <li>
          <a href='/Portfolio'>Maquette d'un site</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Footer;