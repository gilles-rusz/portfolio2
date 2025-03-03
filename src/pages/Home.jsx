import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';
import '../style/Home.css';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import hero from '../images/hero.jpg';
import john from '../images/john.jpg';
import person from '../images/person.svg';
import geo from '../images/geo.svg';
import card from '../images/card.svg';
import box from '../images/box.svg';
import people from '../images/people.svg';
import avatar from '../images/avatar.png';


const Home = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    return (
        <main>
            <div className='hero'>
                <div className='hero1'>
                    <div className='presentation'>
                        <h1 className='text-center' style={{ fontWeight: 'bold', fontSize: '50px' }}>Bonjour, je suis John Deo</h1>
                        <h2 className='text-center' style={{ fontWeight: 'bold', fontSize: '30px' }}>Développeur web full stack</h2>
                        <>
                            <Button variant="danger" onClick={() => setShow(true)} style={{ width: '150px', marginLeft: '35%' }} >
                                En savoir plus
                            </Button>

                            <Modal
                                show={show}
                                onHide={() => setShow(false)}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                            >
                                <div className='bulle3'>
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-custom-modal-styling-title">
                                            Mon profil Github
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className='contenaire-modal'>
                                        <section className='left-modal'>
                                            <img className='logo-modal' src={avatar} alt='logo john deo'></img>
                                        </section>
                                        <section className='right-modal'>
                                            <div className='icon1'>
                                                <img className='icon' src={person} alt='logo person' ></img>
                                                <a className='para-icon' href='https://api.github.com/users/github-john-doe'>john deo</a>
                                            </div>
                                            <div className='geo'>
                                                <img className='icon' src={geo} alt='logo geolocalisation'></img>
                                            </div>
                                            <div className='para'>
                                                <img className='icon' src={card} alt="logo d'une carte"></img>
                                                <p className='para-icon1'>AS we all know, john Doe's identity is unknown.I just wanted to contribute without being known. </p>
                                            </div>
                                            <div className='repository'>
                                                <img className='icon' src={box} alt='petite boite'></img>
                                                <p>Repository:1</p>
                                            </div>
                                            <div className='followers'>
                                                <img className='icon' src={people} alt='petite boite'></img>
                                                <p>Followers:16</p>
                                            </div>
                                            <div className='folowing'>
                                                <img className='icon' src={people} alt='petite boite'></img>
                                                <p>Following:0</p>
                                            </div>
                                        </section>
                                    </Modal.Body>
                                    <div>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Fermer
                                            </Button>
                                        </Modal.Footer>
                                    </div>
                                </div>
                            </Modal>
                        </>

                    </div>
                    <div className='hero-content' >
                        <img src={hero} alt="un homme devant un pc"></img>
                    </div>
                </div>
                <div className='contenaire'>
                    <Card className='bulle1'>
                        <Card.Body className='deo'>
                            <div className='item-left'>
                                <h3 className='text-center'>A propos</h3>

                                <Figure>
                                    <Figure.Image src={john} />
                                    <Figure.Caption>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sint magnam illo. Recusandae aliquid similique labore, aperiam delectus qui nostrum et eaque nesciunt doloremque facere, veniam optio tempore unde inventore!
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, excepturi dolorem quia eius mollitia molestias culpa quisquam ipsa cumque fugiat eaque sequi sit obcaecati natus officiis recusandae nostrum ratione dolore?
                                    </Figure.Caption>
                                </Figure>
                            </div>
                            <div className='item-right'>
                                <h3>Mes compétences</h3>

                                <div>
                                    <label>HTML 90%</label>
                                    <ProgressBar variant="danger" now={90} />
                                    <label>CSS 80%</label>
                                    <ProgressBar variant="info" now={80} />
                                    <label>JAVASCRIP 70%</label>
                                    <ProgressBar variant="warning" now={70} />
                                    <label>PHP 60%</label>
                                    <ProgressBar variant="success" now={60} />
                                    <label>REACT 50%</label>
                                    <ProgressBar variant="now" now={50} />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </main>
    )
}

export default Home;