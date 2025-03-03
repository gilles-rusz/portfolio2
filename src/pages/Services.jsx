import React from "react";
import '../style/Services.css';
import Card from 'react-bootstrap/Card';
import banner from '../images/banner.jpg';
import brush from '../images/brush.svg';
import slash from '../images/slash.svg';
import search from '../images/search.svg';




const Services = () => {
  return (
    <main>
      <img className="img1" src={banner} alt="fond violet avec un eclair blanc"></img>

      <div className="text-center">
        <h1>Mon offre de services</h1>
        <h2>Voici les prestations sur lesquelles je peux intervenir</h2>
        <hr className="trait"></hr>
      </div>  
             
      

      <div className="presta"> 
        <div>
          <Card className="card1" style={{ width: '20rem',height:'20rem'}}>
            <Card.Body className="onecard">     
                <img className="icon-card" src={brush} style={{ width: '40px', height: '40px'}} alt="pinceau"></img>
                <Card.Title style={{fontWeight:'bold',padding:'10px'}}>UX design</Card.Title>             
                <Card.Text>
                  L'UX Design est une discipline qui consiste à concevoir des produits
                    (sites web, logiciels, applications mobiles, etc.)en plaçant l'utilisateur au centre des préoccupations.
                    L'objectif est de rendre l'expérience utilisateur la plus fluidde et agréable possible.
                </Card.Text>
            </Card.Body>
          </Card>
        </div>


        <div>
          <Card className="card1" style={{ width: '20rem',height:'20rem' }}>
            <Card.Body className="onecard">
                <img src={slash} alt="slash" style={{ width: '40px', height: '40px' }}></img>             
                <Card.Title style={{fontWeight:'bold',padding:'10px'}}>Développement web</Card.Title>           
                <Card.Text>
                  Le developpement de sites web consiste à créer des sites internet en utilisant des languages
                    de programmation (HTML,CSS,JavaScrit,PHP,etc.)et des framworks (Bootstrap,React,Angular,etc.)
                </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card className="card1" style={{ width: '20rem',height:'20rem' }}>
            <Card.Body className="onecard">              
                <img src={search} alt="loupe" style={{ width: '40px', height: '40px' }}></img>             
                <Card.Title style={{fontWeight:'bold',padding:'10px'}}>Référencement</Card.Title>
                <Card.Text>
                  Le référencement naturel(SEO)est une technnique qui à optimiser un site web pour le faire remonter dans les résultats
                    de moteurs de recherche( Google, Bing, Yahoo,etc.)L'objectif est
                    d'attirer un maximun de visiteurs qualifiés sur le site.  
                </Card.Text>
            </Card.Body>
          </Card>       
        </div>

      </div>      
    </main>
  )


}

export default Services;