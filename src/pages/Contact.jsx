import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../style/Contact.css';





const Contact = () => {
    return (
        <main>
            <div className="title2">
                <h1>Contact</h1>
                <h2>Pour me contacter en vue d'un entretien ou d'une future collaboration,merci e rempli le formulairede contact</h2>
                <hr className="trait"></hr>
            </div>
            <div className='contenaire1'>
                <Card className='bulle1'>
                    <Card.Body className='deo'>
                        <div className="item-left">
                            <h3 className='text-center'>Formulaire de contact</h3>
                            <form>
                                <div className="champs">
                                    <input type="text" placeholder="Votre nom" required></input>
                                </div>

                                <div className="champs">
                                    <input type="text" placeholder='Votre adresse email' required></input>
                                </div>

                                <div className="champs">
                                    <input type="text" placeholder='Votre numéro de téléphoone' required></input>
                                </div>

                                <div className="champs">
                                    <input type="text" placeholder='Sujet' required></input>
                                </div>
                                <div className="champs">
                                    <textarea type="text" placeholder='Votre message' required></textarea>
                                </div>
                                <div className='button1'>
                                    <Button type="submit" variant="primary">Envoyer</Button>
                                </div>
                            </form>
                        </div>

                        <div className='item-right'>
                            <h3>Mes coordonnées</h3>
                            
                                <h4>John Doe</h4>
                                <div className='info'>
                                    <img className='icon-info' src='../images/map.svg' alt='logo de carte'></img>
                                    <p className='para-info'>40 rue Laure Diebold</p>
                                </div>

                                <div className='info'>
                                    <img className='icon-info' src='../images/geo-alt.svg' alt='logo geolocalisation'></img>
                                    <p className='para-info'>69009 Lyon, France</p>
                                </div>

                                <div className='info'>
                                    <img className='icon-info' src='../images/tablet.svg' alt='logo de tablette'></img>
                                    <p className='para-info' >10 20 30 40 50</p>
                                </div>

                                <div className='info'>
                                    <img className='icon-info' src='../images/envelope-at.svg' alt='logo envelope avec un arobase'></img>
                                    <p className='para-info'>john.deo@gmail.com</p>
                                </div>

                                <div className='ifram'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.254304924368!2d4.796403976132289!3d45.77866197108072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1740044048850!5m2!1sfr!2sfr" height={'350px'}></iframe>                                
                                </div>
                            

                        </div>
                    </Card.Body>
                </Card>
            </div>
        </main>
    )
}

export default Contact;